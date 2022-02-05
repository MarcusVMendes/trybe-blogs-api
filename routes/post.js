const router = require('express').Router();
const {
  createPostController,
} = require('../controllers/post');

router.post('/', createPostController);

module.exports = router;