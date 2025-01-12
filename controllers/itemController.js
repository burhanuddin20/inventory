const queries = require('../db/queries');

exports.getAllItems = async (req, res) => {
    try {
        const result = await queries.getAllItems();
        res.render('items', {
            title: 'All Items',
            items: result.rows
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

exports.getItemsByCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const result = await queries.getItemsByCategory(categoryId);
        res.render('items', {
            title: `Items in ${result.rows[0]?.category_name || 'Category'}`,
            items: result.rows,
            categoryId
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

exports.addItemGet = async (req, res) => {
    try {
        const categories = await queries.getAllCategories();
        res.render('createItem', {
            title: 'Add New Item',
            categories: categories.rows,
            categoryId: req.query.categoryId
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

exports.addItemPost = async (req, res) => {
    try {
        const { name, categoryId, price, description } = req.body;
        await queries.addItem(name, categoryId, price, description);
        res.redirect(`/items/category/${categoryId}`);
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

exports.editItemGet = async (req, res) => {
    try {
        const itemId = req.params.id;
        const [itemResult, categoriesResult] = await Promise.all([
            queries.getItemById(itemId),
            queries.getAllCategories()
        ]);

        if (itemResult.rows.length === 0) {
            return res.status(404).send('Item not found');
        }

        res.render('editItem', {
            title: 'Edit Item',
            item: itemResult.rows[0],
            categories: categoriesResult.rows
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

exports.editItemPost = async (req, res) => {
    try {
        const itemId = req.params.id;
        const { name, categoryId, price, description } = req.body;
        
        await queries.updateItem(itemId, name, categoryId, price, description);
        res.redirect('/items');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const itemId = req.params.id;
        await queries.deleteItem(itemId);
        res.redirect('/items');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}; 