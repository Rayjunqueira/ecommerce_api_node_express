const db = require('../../models/index');

exports.store = async (req, res) => {
    const { quantity } = req.body;
    const { id }  = req.params;
    try {      

        const verifyProduct = await db.Product.findOne({ where: { id } });

        if (!verifyProduct) {
            res.status(400).json('Product does not exists!')
        }

        const verifyCart = await db.Product.findOne({ where: { id } });


        const createdCart = await db.Cart.create({
            productId: id,
            quantity,
        });
        
        return res.status(200).json(createdCart);
    } catch (err) {
        return res.status(500).json(err);
    }
}

