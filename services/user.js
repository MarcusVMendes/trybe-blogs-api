const { userSchema } = require('../utils/validations');
const { errorMessage } = require('../utils/errorMessage');
const { User } = require('../models');
const { createToken } = require('../utils/token');

const createUserService = async (displayName, email, password, image) => {
  const { error } = userSchema.validate({ displayName, email, password, image });
  if (error) throw errorMessage(400, error.message);
  const userExists = await User.findOne({ where: { email } });
  if (userExists) throw errorMessage(409, 'User already registered');
  await User.create({ displayName, email, password, image });
  const data = {
    displayName,
    email,
  };
  const token = await createToken(data);
  return { token };
};

module.exports = {
  createUserService,
};