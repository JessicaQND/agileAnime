require('../model/db');
var mongoose = require('mongoose');
var member = mongoose.model('Member');


function index(req,res){
  member.find().exec(
        function(err, simpleSchema){
          if(err){res.render('error', {
            message:err.message,
            error: err});
          }
	  else{console.log('find complete');
	    res.render('member',{'member':simpleSchema });}
	}
      );
};

module.exports.newMember = function(req,res){
  var newmember = new member({firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age, username: req.body.username, password : req.body.password,
  int1: req.body.int1, int2: req.body.int2, int3: req.body.int3});
  newmember.save(function(err, data){
    if(err){
      console.log(err);
      res.status(500);
      res.render('error', {
        message:err.message,
        error: err
      });
    }
    else{
      console.log(data, ' saved');
      index(req, res);
    }
  });
};
