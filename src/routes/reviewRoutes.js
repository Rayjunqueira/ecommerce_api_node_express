const router = require('express').Router();

const CreateReview = require('../controllers/ReviewController/CreateReview');
const DeleteReview = require('../controllers/ReviewController/DeleteReview');
const FindOneReview = require('../controllers/ReviewController/FindOneReview');
const FindAllReview = require('../controllers/ReviewController/FindAllReview');

router.post('/', CreateReview.store);
router.get('/:id', FindOneReview.index);
router.get('/', FindAllReview.index);
router.delete('/:id', DeleteReview.delete);

module.exports = router;