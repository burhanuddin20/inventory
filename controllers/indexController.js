exports.getIndex = (req, res) => {
    res.render('index', {
        title: 'Inventory Management System'
    });
}; 