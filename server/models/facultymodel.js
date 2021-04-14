const bcrypt = require('bcrypt');
const saltRounds = 10;
const yourPassword = "someRandomPasswordHere";
const bcryptjs = require("bcryptjs");


var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var facultySchema = new Schema({    
    firstname: { type: String   }, 
    lastname:{type:String},    
    idnum: { type: String  },   
    email: { type: String }, 
    dept:{type:String},
    year:{type:String},
    course:{type:String},
    pass:{type:String},
    conpass:{type:String},    
    phone: { type: String },     
},{ versionKey: false });


facultySchema.methods.comparepassword = function(password,cb){
    console.log("insdie facultyy ")
    console.log(password)
    console.log(this.pass)
    bcrypt.compare(password,this.pass,function(err,isMatch){
        if(err) return err;
        cb(null,isMatch);
    });
  }

  const faculty = mongoose.model('faculty', facultySchema);

module.exports = faculty;