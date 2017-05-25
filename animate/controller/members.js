require('../model/db');
var mongoose = require('mongoose');
var member = mongoose.model('Member');
var account = mongoose.model('Account');


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

/*module.exports.matches = function(req,res){
	var user1 = db.Members.find(gjihil);
	var user2;
	var matchlist = [];
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
<<<<<<< HEAD

}*/
=======
   
}

//another possibility for matching
var user1 = db.members.find(???);
var matchedusers = [];
var otherUsers = db.members.find({
$or: [{"int1": user1.int1}, {"int1": user1.int2}, {"int1": user1.int3},
	{"int2": user1.int1}, {"int2": user1.int2}, {"int2": user1.int3},
	{"int3": user1.int1}, {"int3": user1.int2}, {"int3": user1.int3}]
});
while(otherusers.hasNext()) {
		matchedusers.push;
} 
*/
>>>>>>> 04cec4789459d9a29a9d7e23670c0a9b7d6f149c

//start the chat
//log out
