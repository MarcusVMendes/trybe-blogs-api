const {
  createUserService,
} = require('../services/user.js');

const createUserController = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const user = await createUserService(displayName, email, password, image);
    return res.status(201).json(user);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  createUserController,
};