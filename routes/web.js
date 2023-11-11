const HomeController = require('../controllers/HomeController');
const BooksController = require('../controllers/booksController');
const ArticleController = require('../controllers/ArticleController');

const router = require('express').Router();
const apiRouter = require('./api');

// homepage
router.get('/', HomeController.index);

// article
router.get('/articles', ArticleController.index);

// books routes
router.route('/books')
    .get(BooksController.index)
    .post(BooksController.store);
router.route('/books/:id')
    .get(BooksController.show)
    .put(BooksController.update)
    .delete(BooksController.destroy);

router.use('/api', apiRouter);


module.exports = router;
