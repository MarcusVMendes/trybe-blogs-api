const userSchema = require('../utils/validations');
const { errorMessage } = require('../utils/errorMessage');

const createUserService = async (name, email, password, image) => {
  const { error } = userSchema.validate({ name, email, password });
  if (error) throw errorMessage(400, error.message);
};

module.exports = {
  createUserService,
};