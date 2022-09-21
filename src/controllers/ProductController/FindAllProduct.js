const db = require('../../models/index');

exports.index = async (req, res) => {
    try {
        const products = await db.Product.findAll();

        return res.status(200).json(products);
    } catch (err) {
        return res.status(500).json(err);
    }
}