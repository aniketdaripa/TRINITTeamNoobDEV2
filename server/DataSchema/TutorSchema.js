const mongoose = require("mongoose");

const ReactFormDataSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  subjectsTaught: [{ language: String, level: String }],
  phoneNumber: {
    type: String,
  },
  photo: {
    type: String,
  },
  description: { type: String },
  price: { 45: String, 60: String, 90: String },
  rating:{type:String},
  timeSlot:[{day:String,slot:[{startTime:String,endTime:String, duration:String, enrolledStudent:{email:String}}]}]
});

const tutor = mongoose.model("tutor", ReactFormDataSchema);
module.exports = tutor;
