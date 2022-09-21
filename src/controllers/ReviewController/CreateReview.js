const db = require('../../models/index');

exports.store = async (req, res) => {
    const { productid, customerId, review, rating } = req.body;
    try {      
        const verifyProduct = await db.Product.findOne({ where: { id: productid } });

        if (!verifyProduct) {
            res.status(400).json('Product does not exists!')
        }

        const verifyCustomer = await db.Customer.findOne({ where: { id: customerId } });

        if (!verifyCustomer) {
            res.status(400).json('Customer does not exists!')
        }

        const createdReview = await db.Review.create({
            productid,
            customerId,
            review,
            rating,
        });
        
        return res.status(200).json(createdReview);
    } catch (err) {
        return res.status(500).json(err);
    }
}

