const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const exerciseSchema = new Schema({
Subject: {type: String, required: true},
Assignment_no: {type: String, required: true},
Start_Date: {type: String, required: true},
Submission_Date: {type: String,required: true}
}, {
timestamps: true
});
const Exercise = mongoose.model('Exercise', exerciseSchema);
module.exports = Exercise;