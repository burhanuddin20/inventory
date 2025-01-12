const { Router } = require('express');
const categoryController = require('../controllers/categoryController');
const adminAuth = require('../middleware/adminAuth');

const categoryRouter = Router();

categoryRouter.get('/', categoryController.getAllCategories);
categoryRouter.get('/new', categoryController.addCategoryGet);
categoryRouter.post('/new', adminAuth, categoryController.addCategoryPost);

module.exports = categoryRouter; 