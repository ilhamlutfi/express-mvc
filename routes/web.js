const HomeController = require('../controllers/HomeController');
const BookController = require('../controllers/booksController');
const ArticleController = require('../controllers/ArticleController');

const router = require('express').Router();
const apiRouter = require('./api');

// homepage
router.get('/', HomeController.index);
router.get('/home', HomeController.index);

// article
router.get('/articles', ArticleController.index);

// books routes
router.route('/books')
    .get(BookController.index)
    .post(BookController.store);
router.route('/books/:id')
    .get(BookController.show)
    .put(BookController.update)
    .delete(BookController.destroy);

router.use('/api', apiRouter);


module.exports = router;
