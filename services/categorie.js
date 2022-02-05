const { categorieSchema } = require('../utils/validations');
const { errorMessage } = require('../utils/errorMessage');
const { Categorie } = require('../models');
const { verifyToken } = require('../utils/token');

const createCategorieService = async (name, token) => {
  const { error } = categorieSchema.validate({ name });
  if (error) throw errorMessage(400, error.message);
  if (!token) throw errorMessage(401, 'Token not found');
  const validToken = verifyToken(token);
  if (!validToken) throw errorMessage(401, 'Expired or invalid token');
  const { id } = await Categorie.create({ name });
  return {
    id,
    name,
  };
};

const getAllCategoriesService = async (token) => {
  if (!token) throw errorMessage(401, 'Token not found');
  const validToken = verifyToken(token);
  if (!validToken) throw errorMessage(401, 'Expired or invalid token');
  const categories = await Categorie.findAll();
  return categories;
};

module.exports = {
  createCategorieService,
  getAllCategoriesService,
};