var mongoose = require('mongoose');

var Memembers = new mongoose.Schema(
  {firstname:String,
    lastname:String,
    date: Number,
    username:String,
    password:String,
    int1:String,
    int2:String,
    int3:String
  }
);

mongoose.model('Memebers', simpleSchema );
