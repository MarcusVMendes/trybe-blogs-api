const {
  createUserService,
  getAllUsersService,
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

const getAllUsersController = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;
    const users = await getAllUsersService(token);
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  createUserController,
  getAllUsersController,
};