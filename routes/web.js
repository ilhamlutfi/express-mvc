const { index, store, show, update, destroy } = require('../controllers/booksController');

const router = require('express').Router();
const apiRouter = require('./api');

// router.get('/books', index)
// router.get('/books/:id', show)
// router.post('/books', store)
// router.put('/books/:id', update)
// router.delete('/books/:id', delete)

// books routes
router.route('/books')
    .get(index)
    .post(store);
router.route('/books/:id')
    .get(show)
    .put(update)
    .delete(destroy);

router.use('/api', apiRouter);


module.exports = router;
