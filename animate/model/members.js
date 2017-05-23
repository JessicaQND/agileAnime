var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:3000')
var Schema = mongoose.Schema;

var Member = new Schema({
  firstname:String,
    lastname:String,
    date: Number,
    username:String,
    password:String,
    int1:String,
    int2:String,
    int3:String
  }
);

module.exports = mongoose.model('Member', Member);
