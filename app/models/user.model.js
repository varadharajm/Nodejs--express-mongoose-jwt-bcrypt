const mongoose = require("mongoose");

const userModule = mongoose.Schema({
    name:{
        type:String,
        min:3,
        maxlength:15,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("User_sigup", userModule);