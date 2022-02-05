const router = require('express').Router();
const {
  createCategorieController,
  getAllCategoriesController,
} = require('../controllers/categorie');

router.post('/', createCategorieController);
router.get('/', getAllCategoriesController);

module.exports = router;