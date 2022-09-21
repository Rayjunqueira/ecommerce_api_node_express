const db = require('../../models/index');

exports.index = async (req, res) => {
    try {
        const customer = await db.Customer.findAll();

        return res.status(200).json(customer);
    } catch (err) {
        return res.status(500).json(err);
    }
}