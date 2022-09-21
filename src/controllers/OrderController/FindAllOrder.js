const db = require('../../models/index');

exports.index = async (req, res) => {
    try {
        const order = await db.Order.findAll();

        return res.status(200).json(order);
    } catch (err) {
        return res.status(500).json(err);
    }
}