const router = require('express').Router();
const  userController  = require('./userController');

router.route('/api/user')
  .get(userController.detail);

router.route('/api/user')
  .post(userController.create);

module.exports = router;
