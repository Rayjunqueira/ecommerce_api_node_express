const db = require('../../models/index');


exports.update = async (req, res) => {
    const { id } = req.params;
    const { quantity } = req.body;
    try {

        const cart = await db.Cart.findOne({ where: { id } });

        await cart.update({
            quantity
        });

        return res.status(200).json('Cart updated!');
    } catch (err) {
        return console.log(err);
    }
}