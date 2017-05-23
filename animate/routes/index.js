var express = require('express');
var Memberdb = require('../model/members')
var router = express.Router();
var ctrlMemeber = require('../controller/members');

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/register', function(req, res) {
    res.render('register', {});
});

router.get('/login', function(req, res) {
    res.render('login', {});
});

router.post('/register', ctrlMemeber.newMember);

router.get('/', function(req, res) {
      res.render('index');
});

router.get('/login', function(req, res) {
      res.render('login');
});

router.get('/register', function(req, res) {
      res.render('register', { });
});

router.post('/login',ctrlMemeber.login);

module.exports = router;
