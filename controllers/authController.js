const { User, UserRoles, Roles } = require("../models/models");
const ApiError = require("../error/ApiError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const generateJWT = (id, login, role) => {
  return jwt.sign({ id, login, role }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

class AuthController {
  async registration(req, res, next) {
    const { name, login, password, role } = req.body;
    // if (!name || !login || !password) {
    //   return next(ApiError.badRequest("Некорректные имя, логин или пароль"));
    // }
    // const candidate = await User.findOne({ where: { login } });
    // if (candidate) {
    //   return next(
    //     ApiError.badRequest("Пользователь с таким логином уже существует")
    //   );
    // }
    // const hashPassword = await bcrypt.hash(password, 5);
    const user = await User.create({
      name,
      login,
      password, // : hashPassword,
    });

    if (role) {
      user.role = [];
      role = JSON.parse(role);
      role.forEach((el) => {
        user.role.push(el);
        UserRoles.create({
          name: el,
          userId: user.id,
        });
      });
    }
    // const token = generateJWT(user.id, login, user.role);
    return res.json({ user }); // res.json({ token });
  }

  async login(req, res, next) {
    const { login, password } = req.body;
    const user = await User.findOne({
      where: { login },
      include: [{ model: Roles }],
    });
    if (!user) {
      return next(ApiError.authError("Неверно указан login пользователя"));
    }
    // let comparePassword = bcrypt.compareSync(password, user.password);
    // if (!comparePassword) {
    //   return next(ApiError.authError("Неверно указан пароль пользователя"));
    // }
    const roles = [];
    user.roles.forEach((el) => roles.push(el.dataValues.name));
    const token = generateJWT(user.id, user.login, roles);
    return res.json({ token });
  }

  async check(req, res, next) {
    const token = generateJWT(req.user.id, req.user.login, req.user.role);
    return res.json({ token });
  }
}

module.exports = new AuthController();
