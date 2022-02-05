const { loginSchema } = require('../utils/validations');
const { errorMessage } = require('../utils/errorMessage');
const { User } = require('../models');
const { createToken } = require('../utils/token');

const loginService = async (email, password) => {
  const { error } = loginSchema.validate({ email, password });
  if (error) throw errorMessage(400, error.message);
  const user = await User.findOne({ where: { email } });
  if (!user) throw errorMessage(400, 'Invalid fields');
  const data = { email };
  const token = createToken(data);
  return { token };
};

module.exports = {
  loginService,
};