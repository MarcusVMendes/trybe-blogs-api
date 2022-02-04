const router = require('express').Router();
const {
  createUserController,
} = require('../controllers/user');

router.post('/', createUserController);

module.exports = router;