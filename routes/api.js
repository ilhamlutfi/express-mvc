const UserController = require('../controllers/UserController');

const router = require('express').Router();

router.route('/users')
    .get(UserController.index)
    .post(UserController.store)

router.route('/users/:id')
    .get(UserController.show)
    .put(UserController.update)
    .delete(UserController.destroy)

module.exports = router;
