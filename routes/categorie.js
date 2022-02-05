const router = require('express').Router();
const {
  createCategorieController,
} = require('../controllers/categorie');

router.post('/', createCategorieController);

module.exports = router;