const db = require('../../models/index');

const bcrypt = require('bcryptjs');

exports.update = async (req, res) => {
    const { id } = req.params;
    const { name, desc, price, stock, category } = req.body;
    try {

        const product = await db.Product.findOne({ where: { id } });

        if (!product) {
            return res.status(401).json('User does not exist');
        }


        await product.update({
            name,
            desc,
            price,
            stock,
            category,
        });

        return res.status(200).json('Product updated!');
    } catch (err) {
        return console.log(err);
    }
}