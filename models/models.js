const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING },
    login: { type: DataTypes.STRING },
    password: { type: DataTypes.STRING },
  },
  {
  }
);

const Roles = sequelize.define(
  "roles",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
);

const Products = sequelize.define("products", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  }, // •	Поле с целым целом
  name: { type: DataTypes.STRING, validate: { len: [0, 255] } }, // •	Текстовое поле длинной до 255 символов
  description: {
    type: DataTypes.TEXT,
    validate: { len: [255, 65535] },
  }, // •	Текстовое поле длинной свыше 1000 символов
  price: { type: DataTypes.DOUBLE }, // •	Поле с дробным числом
  createdAt: {
    type: DataTypes.DATEONLY,
    get() {
      return new Date().toJSON().substring(0, 10);
    },
  }, // •	Поле с датой
  updatedAt: {
    type: DataTypes.DATE,
    get() {
      return new Date();
    },
  }, //   •	Поле с датой и временем
  image: { type: DataTypes.BLOB }, // •	Поле image (хранение графического файла)
  blob: { type: DataTypes.BLOB }, // •	Поле blob (хранение произвольного файла)
});

const SimpleDirectory = sequelize.define(
  "simpleDirectory",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
);

const TreeDirectory = sequelize.define(
  "treeDirectory",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: { type: DataTypes.STRING },
  },
  {
    timestamps: false,
  }
);

const TreeDirectoryAncestor = sequelize.define(
  "treeDirectoryAncestor",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: false,
  }
);

const UserRoles = sequelize.define(
  "userRoles",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    timestamps: false,
  }
);

TreeDirectory.belongsTo(TreeDirectory, { as: "parent", foreignKey: "parentId" });
TreeDirectory.hasMany(TreeDirectory, { as: "children", foreignKey: "parentId" });
TreeDirectory.belongsToMany(TreeDirectory, {
  as: "descendents",
  foreignKey: "ancestorId",
  through: TreeDirectoryAncestor,
});
TreeDirectory.belongsToMany(TreeDirectory, {
  as: "ancestors",
  foreignKey: "folderId",
  through: TreeDirectoryAncestor,
});

User.belongsToMany(Roles, { through: UserRoles });
Roles.belongsToMany(User, { through: UserRoles });

SimpleDirectory.hasMany(Products, { foreignKey: "simpleD_ID", as: "Products" });
Products.belongsTo(SimpleDirectory, { foreignKey: "simpleD_ID" }); // •	Ссылка на простой справочник

TreeDirectory.hasMany(Products, { foreignKey: "folder_ID", as: "Products" });
Products.belongsTo(TreeDirectory, { foreignKey: "folder_ID" }); // •	Ссылка на древовидный справочник

module.exports = {
  User,
  Roles,
  Products,
  SimpleDirectory,
  TreeDirectory,
  TreeDirectoryAncestor,
  UserRoles,
};
