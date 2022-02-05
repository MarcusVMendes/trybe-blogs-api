const {
  createCategorieService,
  getAllCategoriesService,
} = require('../services/categorie');

const createCategorieController = async (req, res, next) => {
  try {
    const { name } = req.body;
    const { authorization: token } = req.headers;
    const categorie = await createCategorieService(name, token);
    return res.status(201).json(categorie);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getAllCategoriesController = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;
    const categories = await getAllCategoriesService(token);
    return res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  createCategorieController,
  getAllCategoriesController,
};