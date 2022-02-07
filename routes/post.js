const router = require('express').Router();
const {
  createPostController,
  getAllPostsController,
  getUserPostController,
} = require('../controllers/post');

router.post('/', createPostController);
router.get('/', getAllPostsController);
router.get('/:id', getUserPostController);

module.exports = router;