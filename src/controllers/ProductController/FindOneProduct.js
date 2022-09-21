const db = require('../../models/index');

exports.index = async (req, res) => {
    const { id } = req.params;
    try {
        const findProductById = await db.Product.findOne({ where: { id } });

        return res.status(200).json(findProductById);
    } catch (err) {
        return res.status(500).json(err);
    }
}