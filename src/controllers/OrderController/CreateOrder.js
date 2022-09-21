const db = require('../../models/index');

exports.store = async (req, res) => {
    const { totalAmount, status, comments } = req.body;

    try {      

        const createOrder = await db.Order.create({
            totalAmount,
            status,
            comments,
        });
        
        return res.status(200).json(createOrder);
    } catch (err) {
        return console.log(err);
    }
}