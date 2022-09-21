const db = require('../../models/index');

exports.index = async (req, res) => {
    try {
        const cart = await db.Cart.findAll();

        return res.status(200).json(cart);
    } catch (err) {
        return res.status(500).json(err);
    }
}