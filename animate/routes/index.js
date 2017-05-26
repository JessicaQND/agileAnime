var express = require('express');
var Memberdb = require('../model/members')
var router = express.Router();
var ctrlMemeber = require('../controller/members');
var passport = require('passport');

router.get('/', function(req, res) {
    res.render('index');
});

// router.get('/search', function(req, res) {
//     res.render('search');
// });

router.get('/about', function(req, res) {
    res.render('about');
});

router.get('/resources', function(req, res) {
    res.render('resources');
});

router.get('/strategies', function(req, res) {
    res.render('strategies');
});

router.get('/search', function(req, res) {
    res.render('search');
});
router.post('/search', ctrlMemeber.Matching);

//should only be for authenticated users
router.get('/profile', ctrlMemeber.profilelist);

//updating on update form submit
router.post('/updateFirstname', ctrlMemeber.updateFirstname);
router.post('/updateLastname', ctrlMemeber.updateLastname);
router.post('/updateAge', ctrlMemeber.updateAge);
router.post('/updateInt1', ctrlMemeber.updateInt1);
router.post('/updateInt2', ctrlMemeber.updateInt2);
router.post('/updateInt3', ctrlMemeber.updateInt3);


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

router.get('/logout', function(req, res) {
      req.logout();
          res.redirect('/');
});

module.exports = router;
