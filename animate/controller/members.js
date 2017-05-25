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
      res.render('login');
    }
  });
};
//getting user name and password authencation
module.exports.login = function(req,res){
  var user = db.Member.find(req.body.username);
  var password = user.password;
  console.log('loggin')
  res.render('/')

}
//returning a view of information to the user profile page

//edit/edit information off a user profile page

//the algorithm for producing a list index of matches
//NOT FINAL CODE, just practice/placeholder stuff:
/*module.exports.matches = function(req,res){
	var user1 = db.Members.find(gjihil);
	var user2;
	var matchlist = []
	var otherusers = db.Members.find();
	while(otherusers.hasNext()) {
   		user2 = otherusers.next();
		if (user2.int1 == user1.int1) {
			matchlist.push(user2.username);
		} else if (user2.int2 == user1.int1) {
			matchlist.push(user2.username);
		} else if (user2.int3 == user1.int1) {
			matchlist.push(user2.username);
		} else if (user2.int1 == user1.int2) {
			matchlist.push(user2.username);
		} else if (user2.int2 == user1.int2) {
			matchlist.push(user2.username);
		} else if (user2.int3 == user1.int2) {
			matchlist.push(user2.username);
		} else if (user2.int1 == user1.int3) {
			matchlist.push(user2.username);
		} else if (user2.int2 == user1.int3) {
			matchlist.push(user2.username);
		} else if (user2.int3 == user1.int3) {
			matchlist.push(user2.username);
		}
   
}*/

//start the chat
//log out
