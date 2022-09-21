const db = require('../../models/index');

exports.index = async (req, res) => {
    const { id } = req.params;
    try {
        const findOrderById = await db.Order.findOne({ where: { id } });

        return res.status(200).json(findOrderById);
    } catch (err) {
        return res.status(500).json(err);
    }
}