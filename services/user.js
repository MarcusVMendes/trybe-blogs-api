const { userSchema } = require('../utils/validations');
const { errorMessage } = require('../utils/errorMessage');
const { User } = require('../models');
const { createToken, verifyToken } = require('../utils/token');

const createUserService = async (displayName, email, password, image) => {
  const { error } = userSchema.validate({ displayName, email, password, image });
  if (error) throw errorMessage(400, error.message);
  const userExists = await User.findOne({ where: { email } });
  if (userExists) throw errorMessage(409, 'User already registered');
  await User.create({ displayName, email, password, image });
  const data = { email };
  const token = await createToken(data);
  return { token };
};

const getAllUsersService = async (token) => {
  if (!token) throw errorMessage(401, 'Token not found');
  const validToken = verifyToken(token);
  if (!validToken) throw errorMessage(401, 'Expired or invalid token');
  const users = await User.findAll();
  return users;
};

module.exports = {
  createUserService,
  getAllUsersService,
};

/*
Model Querying - Basics
https://sequelize.org/v6/manual/model-querying-finders.html

Model Querying - Finders
https://sequelize.org/v6/manual/model-querying-basics.html
*/