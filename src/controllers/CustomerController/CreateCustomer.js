const db = require('../../models/index');

const bcrypt = require('bcryptjs');

exports.store = async (req, res) => {
    const {name, email, password, country, city, state, address, postalCode} = req.body;

    try {

        const customerAlreadyExists = await db.Customer.findOne({ where: { email } });
        
        const hashedPassword = bcrypt.hashSync(password, 10);

        if (customerAlreadyExists) {
            res.status(400).json('Customer already exists.');
        }

        const createdCustomer = await db.Customer.create({
            name,
            email,
            password: hashedPassword,
            country,
            city,
            state,
            address,
            postalCode
         });
        
        return res.status(200).json(createdCustomer);
    } catch (err) {
        return res.status(500).json(err);
    }
}

