exports.inputNewUserGet = (req, res) => {
    // We'll modify this later to fetch categories from the database
    const dummyCategories = [
        { id: 1, name: 'Electronics' },
        { id: 2, name: 'Books' },
        { id: 3, name: 'Clothing' }
    ];
    
    res.render("createUser", {
        title: "Add New Item",
        categories: dummyCategories
    });
};

exports.addUserPost = (req, res) => {
    // For now, just log the item details
    console.log("Item to be saved: ", {
        name: req.body.itemName,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description
    });
    
    // Later we'll add database insertion
    res.redirect('/');
}; 