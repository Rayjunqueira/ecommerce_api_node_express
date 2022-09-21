const db = require('../../models/index');

exports.index = async (req, res) => {
    const { id } = req.params;
    try {
        const findCartById = await db.Cart.findOne({ where: { id } });

        return res.status(200).json(findCartById);
    } catch (err) {
        return res.status(500).json(err);
    }
}