const mongoose = require("mongoose");

const ReactFormDataSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  userType:{
    type:String
    //student or tutor
  }
});

const user = mongoose.model("user", ReactFormDataSchema);
module.exports = user;
