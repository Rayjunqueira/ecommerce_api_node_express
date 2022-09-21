const db = require('../../models/index');

exports.index = async (req, res) => {
    const { id } = req.params;
    try {
        const findCustomerById = await db.Customer.findOne({ where: { id } });

        return res.status(200).json(findCustomerById);
    } catch (err) {
        return res.status(500).json(err);
    }
}