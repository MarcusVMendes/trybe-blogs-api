const { postSchema } = require('../utils/validations');
const { errorMessage } = require('../utils/errorMessage');
const { BlogPost, Categorie, User } = require('../models');
const { verifyToken } = require('../utils/token');

const createPostService = async (title, content, categoryIds, token) => {
  const { error } = postSchema.validate({ title, content, categoryIds });
  if (error) throw errorMessage(400, error.message);
  if (!token) throw errorMessage(401, 'Token not found');
  const validToken = verifyToken(token);
  if (!validToken) throw errorMessage(401, 'Expired or invalid token');
  const categoryExists = await Categorie.findAll({ where: { id: categoryIds } });
  if (categoryExists.length 
    !== categoryIds.length) throw errorMessage(400, '"categoryIds" not found');
  const { id } = await BlogPost.create({ title, content, categoryIds });
  const user = await User.findOne({ where: { email: validToken } });
  return {
    id,
    userId: user.id,
    title,
    content,
  };
};

module.exports = {
  createPostService,
};