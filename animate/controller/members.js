require('../model/db');
var mongoose = require('mongoose');
var Members = mongoose.model('Members');

/*adding a person to the date base*/

module.exports.newMember = function(req,res){
  var newMember = new Members({firstname: req.body.firstname, lastname:
  req.body.lastname, date:reg.body.date, username: req.body.username, password:
  req.body.password,int1:reg.body.int1,int2:reg.body.int2,int3:reg.body.int3});
  newMember.save(function(err,date){
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
} ;
