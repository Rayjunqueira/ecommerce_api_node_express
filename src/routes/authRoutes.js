const router = require('express').Router();

const AuthCustomer = require('../controllers/CustomerController/AuthCustomer');

router.post('/', AuthCustomer.store);

module.exports = router;