var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000')
var ctrlMember = require('../controller/members');
var membership = require('../model/members')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', function(req, res){
  membership.
    register(new membership({ firstname : req.body.firstname }),
    req.body.lastname,
    req.body.date,
    req.body.username,
    req.body.password,
    req.body.int1,
    req.body.int2,
    req.body.int3
  )}
);

module.exports = router;
