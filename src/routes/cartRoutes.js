const router = require('express').Router();

const CreateCart = require('../controllers/CartController/CreateCart');
const FindOneCart = require('../controllers/CartController/FindOneCart');
const FindAllCart = require('../controllers/CartController/FindAllCart');
const UpdateCart = require('../controllers/CartController/UpdateCart');
const DeleteCart = require('../controllers/CartController/DeleteCart');

router.post('/:id', CreateCart.store);
router.get('/:id', FindOneCart.index);
router.get('/', FindAllCart.index);
router.put('/:id', UpdateCart.update);
router.delete('/:id', DeleteCart.delete);

module.exports = router;