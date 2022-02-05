const {
  createCategorieService,
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

module.exports = {
  createCategorieController,
};