const router = require('express').Router();
const {
  createUserController,
  getAllUsersController,
  getUserByIdController,
} = require('../controllers/user');

router.post('/', createUserController);
router.get('/', getAllUsersController);
router.get('/:id', getUserByIdController);

module.exports = router;