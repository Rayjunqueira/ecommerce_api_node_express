const router = require('express').Router();

const CreateCustomer = require('../controllers/CustomerController/CreateCustomer');
const DeleteCustomer = require('../controllers/CustomerController/DeleteCustomer');
const UpdateCustomer = require('../controllers/CustomerController/UpdateCustomer');
const FindOneCustomer = require('../controllers/CustomerController/FindOneCustomer');
const FindAllCustomer = require('../controllers/CustomerController/FindAllCustomer');

const { verifyToken } = require('../middlewares/verifyToken');

router.post('/', CreateCustomer.store);
router.delete('/:id', verifyToken, DeleteCustomer.delete);
router.put('/:id', verifyToken, UpdateCustomer.update);
router.get('/:id', verifyToken, FindOneCustomer.index);
router.get('/', verifyToken, FindAllCustomer.index);

module.exports = router;