const router = require('express').Router();
const {
  createUserController,
  getAllUsersController,
} = require('../controllers/user');

router.post('/', createUserController);
router.get('/', getAllUsersController);

module.exports = router;