const router = require('express').Router();

const userController = require('../controller/user-controller');

router.route('/').get(userController.getUsers);

router.route('/add').post(userController.createUser);

router.route('/:id').get(userController.getUser);

router.route('/:id').delete(userController.deleteUser);

router.route('/:id').put(userController.updateUser);

module.exports = router;
