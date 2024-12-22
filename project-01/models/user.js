const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    first_name :{
      type : String,
      required : true
    },
    last_mame :{
      type : String,
      required : false
    },
    email :{
      type : String,
      required : true,
      unique : true
    },
    job_title: {
      type : String,
      required : false
    },
    gender :{
      type: String
    }
  
   })

   const user = mongoose.model("user", userSchema);
   modules.exports = user;