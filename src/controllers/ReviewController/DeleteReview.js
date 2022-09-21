const db = require('../../models/index');

exports.delete = async (req, res) => {
    const { id } = req.params;
    try {
        await db.Review.destroy({
            where: {
                id: id
            },
            force: true
        });
        return res.status(200).json('Review deleted!');
    } catch (err) {
        return res.status(500).json(err);
    }
}