const adminAuth = (req, res, next) => {
    const adminPassword = req.body.adminPassword;
    
    if (adminPassword === process.env.ADMIN_PASSWORD) {
        next();
    } else {
        res.status(403).send('Invalid admin password');
    }
};

module.exports = adminAuth; 