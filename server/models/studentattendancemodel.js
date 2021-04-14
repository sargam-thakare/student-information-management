
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studentattendance = new Schema({    
   subject: { type: String   }, 
    classes:{type:String},    
    attended:{type:String},
       
},{ versionKey: false });
 
 

module.exports =mongoose.model('studentattendance', studentattendance);



