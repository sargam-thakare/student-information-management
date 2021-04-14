const bcrypt = require('bcrypt');
const saltRounds = 10;
const yourPassword = "someRandomPasswordHere";
const bcryptjs = require("bcryptjs");
const jwt=require('jsonwebtoken');
const confiq=require('../config/config') ;

SECRET= 'mysecretkey'




var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studentSchema = new Schema({    
    firstname: { type: String   }, 
    lastname:{type:String},    
    idnum: { type: String  },   
    email: { type: String }, 
    dept:{type:String},
    pass:{type:String},
    conpass:{type:String},    
    phone: { type: String },  
    token:{        type: String    }   
},{ versionKey: false });
 

studentSchema.methods.comparepassword = function(password,cb){
    console.log("isnide stydent schme")
    console.log(password)
    console.log(this.pass)
    bcrypt.compare(password,this.pass,function(err,isMatch){
        if(err) console.log(err);
        cb(null,isMatch);
        console.log("byeye erororr")
       
    });
  }

  studentSchema.methods.generateToken=function(cb){
    var user =this;
    var token=jwt.sign(user._id.toHexString(),SECRET);
    user.token=token;
    user.save(function(err,user){
        if(err) return cb(err);
        cb(null,user);
    })
}

// find by token
studentSchema.statics.findByToken=function(token,cb){
    var user=this;

    jwt.verify(token,confiq.SECRET,function(err,decode){
        user.findOne({"_id": decode, "token":token},function(err,user){
            if(err) return cb(err);
            cb(null,user);
        })
    })
};

//delete token

studentSchema.methods.deleteToken=function(token,cb){
    var user=this;

    user.update({$unset : {token :1}},function(err,user){
        if(err) return cb(err);
        cb(null,user);
    })
}  

const student = mongoose.model('student', studentSchema);


module.exports = student;