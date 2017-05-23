var express = require('express');
var Memberdb = require('../model/members')
var router = express.Router();
var ctrlMemeber = require('../controller/members');


router.post('/signup', ctrlMemeber.newMember);

module.exports = router;
