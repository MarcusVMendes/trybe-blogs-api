const router = require('express').Router();
const {
  createUserController,
} = require('../controllers/user');

router.get('/', createUserController);

module.exports = router;