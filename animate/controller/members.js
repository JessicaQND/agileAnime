require('../model/db');
var mongoose = require('mongoose');
var member = mongoose.model('Member');
var account = mongoose.model('Account');

//returning a list on user profile
module.exports.profilelist = profilelist;

function profilelist(req,res){
  member.find( {username : "stroppyjohn" }).exec(
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
