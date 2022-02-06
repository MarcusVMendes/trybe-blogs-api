const router = require('express').Router();
const {
  createPostController,
  getAllPostsController,
} = require('../controllers/post');

router.post('/', createPostController);
router.get('/', getAllPostsController);

module.exports = router;