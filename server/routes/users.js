const express = require('express');
const router = express.Router();
const {register} = require('../controllers/register');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/api/register', register);

module.exports = router;
