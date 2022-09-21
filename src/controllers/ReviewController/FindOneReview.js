const db = require('../../models/index');

exports.index = async (req, res) => {
    const { id } = req.params;
    try {
        const findReviewById = await db.Review.findOne({ where: { id } });

        return res.status(200).json(findReviewById);
    } catch (err) {
        return res.status(500).json(err);
    }
}