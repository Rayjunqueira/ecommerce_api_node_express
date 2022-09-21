const db = require('../../models/index');

exports.store = async (req, res) => {
    const { name, desc, price, stock, category } = req.body;

    try {      
        const createdProduct = await db.Product.create({
            name,
            desc,
            price,
            stock,
            category,
         });
        
        return res.status(200).json(createdProduct);
    } catch (err) {
        return res.status(500).json(err);
    }
}

