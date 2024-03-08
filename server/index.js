require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect(
    process.env.MONGOOSE_URI
  )
  .then(() => {
    console.log("database connected");
  });

  app.post("/", (req,res)=>{

  })
  
  app.get("/", (req,res)=>{

  })


const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
