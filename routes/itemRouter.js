const { Router } = require('express');
const itemController = require('../controllers/itemController');
const adminAuth = require('../middleware/adminAuth');

const itemRouter = Router();

itemRouter.get('/', itemController.getAllItems);
itemRouter.get('/category/:categoryId', itemController.getItemsByCategory);
itemRouter.get('/new', itemController.addItemGet);
itemRouter.post('/new', adminAuth, itemController.addItemPost);
itemRouter.get('/edit/:id', itemController.editItemGet);
itemRouter.post('/edit/:id', adminAuth, itemController.editItemPost);
itemRouter.post('/delete/:id', adminAuth, itemController.deleteItem);

module.exports = itemRouter; 