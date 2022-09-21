const router = require('express').Router();

const CreateProduct = require('../controllers/ProductController/CreateProduct');
const UpdateProduct = require('../controllers/ProductController/UpdateProduct');
const DeleteProduct = require('../controllers/ProductController/DeleteProduct');
const FindAllProduct = require('../controllers/ProductController/FindAllProduct');
const FindOneProduct = require('../controllers/ProductController/FindOneProduct');

router.post('/', CreateProduct.store);
router.put('/:id', UpdateProduct.update);
router.delete('/:id', DeleteProduct.delete);
router.get('/:id', FindOneProduct.index);
router.get('/', FindAllProduct.index);

module.exports = router;