require('../model/db');
var mongoose = require('mongoose');
var member = mongoose.model('Member');
var account = mongoose.model('Account');

//return a list of all users
module.exports.list = list;

function list(req,res){
  member.find({}).exec(
    function(err, simpleSchema){
      if(err){res.render('error', {
        message:err.message,
        error: err});
      }
	  else{console.log(simpleSchema);
	    res.render('search',{'member':simpleSchema });}
	  }
  );
};

//returning a list on user profile
module.exports.profilelist = profilelist;
//find a way to take user through website
function profilelist(req,res){
  member.find( {username : req.user.username }).exec(
    function(err, simpleSchema){
      if(err){res.render('error', {
        message:err.message,
        error: err});
      }
	  else{console.log(simpleSchema);
	    res.render('profile',{'member':simpleSchema });}
	  }
  );
};
//uploading the data base onto mlab
module.exports.newMember = function(req,res){
  var newmember = new member({firstname: req.body.firstname,
    lastname: req.body.lastname,
    age: req.body.age,
    username: req.body.username,
    password : req.body.password,
    int1: req.body.int1,
    int2: req.body.int2,
    int3: req.body.int3
  });
  newmember.save(function(err, data){
    if(err) {
      console.log(err);
      res.status(500);
      res.render('error', {
        message:err.message,
        error: err
      });
    } else {
      account.register(
        new account({username: req.body.username}),
        req.body.password,
        function(err,acc) {
          if(err) {
            console.log(err);
          }
          res.render('login')
          //passport.authenticate('local', {successRedirect:'login'})
        }
      );
    }
  });
}
//find a way to soft code user
  module.exports.updateFirstname = function(req, res){
    member.update({username : req.user.username }, {
    firstname : req.body.firstname,
  }).exec((err,result)=>{
    res.render('updated');
  });
};
  module.exports.updateLastname = function(req, res){
    member.update({username : req.user.username }, {
    lastname : req.body.lastname,
  }).exec((err,result)=>{
    res.render('updated');
  });
};
  module.exports.updateAge = function(req, res){
    member.update({username : req.user.username }, {
    age : req.body.age,
  }).exec((err,result)=>{
    res.render('updated');
  });
};
  module.exports.updateInt1 = function(req, res){
    member.update({username : req.user.username }, {
    int1 : req.body.int1,
  }).exec((err,result)=>{
    res.render('updated');
  });
};
  module.exports.updateInt2 = function(req, res){
    member.update({username : req.user.username }, {
    int2 : req.body.int2,
  }).exec((err,result)=>{
    res.render('updated');
  });
};

  module.exports.updateInt3 = function(req, res){
    member.update({username : req.user.username }, {
    int3 : req.body.int3,
  }).exec((err,result)=>{
    res.render('updated');
  });
};
//we said we would match but did not say how well
module.exports.Matching = Matching ;
function Matching(req,res){
  var Result = member.find()
  var Result10 = Result.limit(10).exec(function(err,list){
    if(err){res.render('error',{
      message:err.message,
      error: err});
    }
    else{console.log(list);
      res.render('index',{'matches':list});}
    });
  };
