var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/education', function(req, res, next) {
  res.render('education');
});

router.get('/work', function(req, res, next) {
  res.render('work');
});

router.get('/skills', function(req, res, next) {
  res.render('skills');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

module.exports = router;
