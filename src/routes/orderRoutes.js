const router = require('express').Router();

const CreateOrder = require('../controllers/OrderController/CreateOrder');
const DeleteOrder = require('../controllers/OrderController/DeleteOrder');
const FindAllOrder = require('../controllers/OrderController/FindAllOrder');
const FindOneOrder = require('../controllers/OrderController/FindOneOrder');
const UpdateOrder = require('../controllers/OrderController/UpdateOrder');

router.post('/', CreateOrder.store);
router.delete('/:id', DeleteOrder.delete);
router.get('/:id', FindOneOrder.index);
router.get('/', FindAllOrder.index);
router.put('/:id', UpdateOrder.update);

module.exports = router;