const {
  Products,
  SimpleDirectory,
  TreeDirectory,
  TreeDirectoryAncestor,
} = require("../models/models");
const ApiError = require("../error/ApiError");

class DataController {
  async getAll(req, res) {
    let { name, price, description, limit, page } = req.query;
    page = page || 1;
    limit = limit || 20;
    let offset = page * limit - limit;
    let data;
    if (!name && !price && !description) {
      data = await Products.findAndCountAll({
        limit,
        offset,
        include: [
          { model: SimpleDirectory, as: "simpleDirectory" },
          { model: TreeDirectory, as: "treeDirectory" },
        ],
      });
    }

    return res.json(data);
  }

  async createOrEdit(req, res, next) {
    try {
      const { name, description, price, folder, simpleDirectory } = req.body;
      const image = req.files.image.data;
      const blob = req.files.blob.data;

      const data = await Products.create({
        name,
        description,
        price,
        image,
        blob,
      });

      if (folder) {
        folder = JSON.parse(folder);
        folder.forEach((el) => {
          Folder.create({
            name: el.name,
            dataId: data.id,
          });
        });
      }

      if (simpleDirectory) {
        simpleDirectory = JSON.parse(simpleDirectory);
        simpleDirectory.forEach((el) => {
          SimpleDirectory.create({
            name: el.name,
            dataId: data.id,
          });
        });
      }

      return res.json(data);
    } catch (e) {
      next(ApiError.badRequest(e.message));
    }
  }

  async getById(req, res) {
    const { id } = req.params;

    const data = await Products.findOne({
      where: { id },
      include: [
        { model: SimpleDirectory, as: "simpleDirectory" },
        { model: Folder, as: "folders" },
      ],
    });

    return res.json(data);
  }

  async delete(req, res) {}
}

module.exports = new DataController();
