require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(cors());
//
const Tutor = require("./DataSchema/TutorSchema");
//
mongoose.connect(process.env.MONGOOSE_URI).then(() => {
  console.log("database connected");
});

app.post("/saveTutorData", async (req, res) => {
  // const sampleData={
  //   name:"abc",
  //   email:"abc@gmail.com",
  //   subjectsTaught:[{language:"english", level:"9"}],
  //   phoneNumber:"7908546541",
  //   photo:"abc.com",
  //   description:"hello i am tutor",
  //   price:{45: "300", 60: "400", 90: "500" },
  //   rating:"5",
  //   timeSlot:[{day:"Monday", slot:[{startTime:"9pm", endTime:"10pm", duration:"60", enrolledStudent:{email:"s1@gmail.com"}}]}]
  // }
  const tutorData = new Tutor({
    name: req.body.name,
    email:req.body.email,
    subjectsTaught:req.body.subjectsTaught,
    phoneNumber:req.body.phoneNumber,
    photo:'null',
    description:req.body.description,
    price:req.body.price,
    rating:req.body.rating,
    timeSlot:req.body.timeSlot
  });
  try {
    await tutorData.save();
    console.log("tutor data inserted");
    res.send("done");
  } catch (err) {
    console.log(err);
  }
});

app.get("/", (req, res) => {});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
