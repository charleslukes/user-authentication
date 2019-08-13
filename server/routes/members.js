const express = require('express');
const router = express.Router();
const {verify} =  require('./privateRoutes');

/* GET users listing. */
router.get('/members',verify, function(req, res, next) {
  res.json({access: 'user verified'});
});

module.exports = router;
