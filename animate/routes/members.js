var mongoose = require('mongoose');
//create the schema for member database
var simpleSchema = new mongoose.Schema(
  {firstname: String,
    lastname: String,
    age: Number,
    username: String,
    password: String,
    int1 : String,
    int2 : String,
    int3 : String
    }
);
//create the db for Memembers
mongoose.model('Member', simpleSchema, 'member');
