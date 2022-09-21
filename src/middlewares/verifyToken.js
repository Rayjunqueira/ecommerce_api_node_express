const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json('Invalid Authorization')
    };

    const token = authorization.replace('Bearer', ' ').trim();

    try {
        const secret = process.env.JWT_SECRET;
        const data = jwt.verify(token, secret);

        const { id } = data;

        req.userId = id;  
        
        return next();
    } catch (err) {
        return res.status(400).json(err);
    }

  };

module.exports = {
  verifyToken,
};