const db = require('../../models/index');

exports.index = async (req, res) => {
    try {
        const review = await db.Review.findAll();

        return res.status(200).json(review);
    } catch (err) {
        return res.status(500).json(err);
    }
}