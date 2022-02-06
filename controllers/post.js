const {
  createPostService,
  getAllPostsService,
} = require('../services/post');

const createPostController = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;
    const { title, content, categoryIds } = req.body;
    const post = await createPostService(title, content, categoryIds, token);
    return res.status(201).json(post);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

const getAllPostsController = async (req, res, next) => {
  try {
    const { authorization: token } = req.headers;
    const posts = await getAllPostsService(token);
    return res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = {
  createPostController,
  getAllPostsController,
};