const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://rockeym50:maharjan1@mongodb.mpm0nj9.mongodb.net/?retryWrites=true&w=majority&appName=mongodb",{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
  }).then(()=>{
    console.log("connected success db");
  }).catch((e)=>{
    console.log(e);
  })
  