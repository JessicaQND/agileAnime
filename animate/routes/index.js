var express = require('express');
var Memberdb = require('../model/members')
var router = express.Router();
var ctrlMemeber = require('../controller/members');
var passport = require('passport');

router.get('/', function(req, res) {
    res.render('index');
});

router.get('/search', function(req, res) {
    res.render('search');
});

router.get('/about', function(req, res) {
    res.render('about');
});

router.get('/resources', function(req, res) {
    res.render('resources');
});

router.get('/strategies', function(req, res) {
    res.render('strategies');
});

//should only be for authenticated users
router.get('/profile', function(req, res) {
    res.render('profile');
});

router.get('/register', function(req, res) {
    res.render('register');
});
router.post('/register', ctrlMemeber.newMember);

router.get('/login', function(req, res) {
    res.render('login',{user : req.user});
});
router.post('/login', passport.authenticate('local'), function(req, res) {
  res.render('index');
});
module.exports = router;
