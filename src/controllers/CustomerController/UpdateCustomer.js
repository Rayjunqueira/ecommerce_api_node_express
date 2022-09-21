const db = require('../../models/index');

const bcrypt = require('bcryptjs');

exports.update = async (req, res) => {
    const { id } = req.params;
    const {name, email, password, country, city, state, address, postalCode} = req.body;
    try {

        const customer = await db.Customer.findOne({ where: { id } });

        if (!customer) {
            return res.status(401).json('User does not exist');
        }

        const hashPassword = bcrypt.hashSync(password, 8);

        await customer.update({
            name,
            email,
            password: hashPassword,
            country,
            city,
            state,
            address,
            postalCode,
        });

        return res.status(200).json('Customer updated!');
    } catch (err) {
        return console.log(err);
    }
}