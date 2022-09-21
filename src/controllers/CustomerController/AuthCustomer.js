const db = require('../../models/index');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.store = async (req, res) => {
    const { email, password } = req.body;
    const secret = process.env.JWT_SECRET;

    try {
        const customerExists = await db.Customer.findOne({ where: { email } });

        if (!customerExists) {
            return res.status(401).json('User does not exist');
        }

        const isValidPassword = await bcrypt.compare(password, customerExists.password);

        if (!isValidPassword) {
            return res.status(401).json('Password is not valid');
        }

        const token = jwt.sign({ id: customerExists.id }, secret, {
            expiresIn: process.env.EXPIRES_TOKEN,
        })

        return res.status(200).json({
            customerExists,
            token,
        });

    } catch (err) {
        console.log(err);
    }
}
