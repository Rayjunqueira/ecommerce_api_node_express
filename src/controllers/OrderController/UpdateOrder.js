const db = require('../../models/index');


exports.update = async (req, res) => {
    const { id } = req.params;
    const { totalAmount, status, comments } = req.body;
    try {

        const order = await db.Order.findOne({ where: { id } });

        await order.update({
            totalAmount,
            status,
            comments,
        });

        return res.status(200).json('Order updated!');
    } catch (err) {
        return console.log(err);
    }
}