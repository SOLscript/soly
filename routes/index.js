var express = require('express');
var router = express.Router();


router.use('/dialogflow', require('./dialogflow'))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
