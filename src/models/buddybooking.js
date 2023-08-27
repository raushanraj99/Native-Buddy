const mongoose = require('mongoose');

// Define a schema for the guide booking data
const buddybooking = new mongoose.Schema({
    touristname:{
        type:String,
        required:[true,"Please enter your name"]
    },
    chosbuddy:{
        type : String ,
        required  : [ true ," Enter your buddy name  "]
    },
    language:{
        type : String ,
        required   :[true,'Enter atleast one Language']
    },
    gender:{
        type : String ,
        required    :[true ,'Select Gender ']
    },
    service:{
        type:String,
        required :[true,'Select at least one service ']
    },
    BookTime:{
        type:String,
        required:[true,'Minimul hour should be 1 hr.']
    },
    contact:{
        type:Number,
        required:[true,"Enter contact number"]
    },
 
});

// Create a Mongoose model using the schema

module.exports = mongoose.model('buddypay', buddybooking);
