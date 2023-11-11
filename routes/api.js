const { index, store, show, update, destroy } = require('../controllers/UserController');

const router = require('express').Router();

router.route('/users')
    .get(index)
    .post(store)

router.route('/users/:id')
    .get(show)
    .put(update)
    .delete(destroy)

module.exports = router;
