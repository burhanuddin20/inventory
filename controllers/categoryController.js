const queries = require('../db/queries');

exports.getAllCategories = async (req, res) => {
    try {
        const result = await queries.getAllCategories();
        res.render('categories', {
            title: 'Categories',
            categories: result.rows
        });
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
};

exports.addCategoryGet = (req, res) => {
    res.render('createCategory', {
        title: 'Add New Category'
    });
};

exports.addCategoryPost = async (req, res) => {
    try {
        await queries.addCategory(req.body.name, req.body.description);
        res.redirect('/categories');
    } catch (err) {
        console.error(err);
        res.status(500).send('Server error');
    }
}; 