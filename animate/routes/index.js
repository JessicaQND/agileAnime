var express = require('express');
var router = express.Router();
var ctrlMemeber = require('../controllers/members');
var memebership = require('../models/members')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup',function(req, res){
  memebership.
    register(new memebership({ firstname:req.body.firstname }),
    req.body.lastname,
    req.body.date,
    req.body.username,
    req.body.password,
    req.body.int1,
    req.body.int2,
    req.body.int3,
});

module.exports = router;
