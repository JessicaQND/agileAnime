require('../model/db');
var mongoose = require('mongoose');
var member = mongoose.model('Member');
var account = mongoose.model('Account');

//return a list of all users
// module.exports.list = list;
//
// function list(req,res){
//   member.find({}).exec(
//     function(err, simpleSchema){
//       if(err){res.render('error', {
//         message:err.message,
//         error: err});
//       }
// 	  else{console.log(simpleSchema);
// 	    res.render('search',{'member':simpleSchema });}
// 	  }
//   );
// };

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
          res.render('/')
          //passport.authenticate('local', {successRedirect:'login'})
        }
      );
    }
  });
}
  module.exports.updateFirstname = function(req, res){
    member.update({username : "stroppyjohn"}, {
    firstname : req.body.firstname,
  }).exec((err,result)=>{
    res.render('updated');
  });
};
  module.exports.updateLastname = function(req, res){
    member.update({username : "stroppyjohn"}, {
    lastname : req.body.lastname,
  }).exec((err,result)=>{
    res.render('updated');
  });
};
  module.exports.updateAge = function(req, res){
    member.update({username : "stroppyjohn"}, {
    age : req.body.age,
  }).exec((err,result)=>{
    res.render('updated');
  });
};
  module.exports.updateInt1 = function(req, res){
    member.update({username : "stroppyjohn"}, {
    int1 : req.body.int1,
  }).exec((err,result)=>{
    res.render('updated');
  });
};
  module.exports.updateInt2 = function(req, res){
    member.update({username : "stroppyjohn"}, {
    int2 : req.body.int2,
  }).exec((err,result)=>{
    res.render('updated');
  });
};

  module.exports.updateInt3 = function(req, res){
    member.update({username : "stroppyjohn"}, {
    int3 : req.body.int3,
  }).exec((err,result)=>{
    res.render('updated');
  });
};

module.exports.MatchMake = function(inT1, inT2, inT3, callback) {
	mongoose.once('open', function() {
		var schema = mongoose.Member()
		var Matched = mongoose.model('Friend', schema);
		Matched.find({
			$or[
			{"int1": inT1}, {"int2": inT1}, {"int3": inT1},
			{"int1": inT2}, {"int2": inT2}, {"int3": inT2},
			{"int1": inT3}, {"int2": inT3}, {"int3": inT3},
			]
		}, function(err, friends) {
		if (err) {
			onErr(err, callback);
		} else {
			mongoose.connection.close();
			console.log(friends);
			callback("", friends);
			}
		});
	});
};
		
module.exports.get = function(req,res {
	var inT1 = profilelist.int1; 
	var inT2 = profilelist.int2;
	ver inT3 = profilelist.int3;
	MatchMake(inT1, inT2, inT3, function(err, MatchMake) {
	if (!err) {
		var matchList = "",
		for (i = 0; i < MatchMake.length; i++) {  
			matchList = matchList + "<li>" MatchMake[i].username + " with interests in " + MatchMake[i].int1 + ", " + MatchMake[i].int2 + " and " + MatchMake[i].int3 + " is a match for you! </li>"
		}
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		res.write(matchList);
		res.end();
		} else {
		res.writeHead(200, {
			'Content-Type': 'text/html'
		});
		res.write("Yikes! Database error!")
		red.end();
	}
	});
};
