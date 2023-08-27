const mongoose = require("mongoose")

const SkillsTech = mongoose.Schema({
        Buddyname:{
                type:String,
                required:[true,"Buddy name is required"]
        },
        imgurl:{
                type : String,
                default:"https://shorturl.at/ciyPZ"
        },
        email:{
                type:String,
                required:[true,"Enter Email address "]
        },
        country:{
                type:String,
                required:[true,"Enter country name "]
        },
        city:{
                type:String,
                required:[true,"Enter city name "]
        },
        pincode:{
                type:Number,
                required:[false]
        },
        religion:{
                type:String,
                required:[false]
        },
        contactNo:{
                type:Number,
                required:[true,"Enter contact number"]
        },
        occupation:{
                type:String,
                required:[false]
        },
        Bio:{
                type:String,
                required:[false]
        },
        Dob:{
                type:Date,
                required:[false],
                default:"2019-05-3"
        },
        gender:{
                type:String,
                required:[true,"Select gender "]
        },
        rating:{
                type:String,
        },
        nature:{
                type:String,
        },
        Hobby:{
                type:String,
                required:[false]
        },
        AreaKnown:{
                type:String,
                required:[true,'Enter at least one Area']
        },
        experience:{
                type:String,
                required:[false,"if yes enter location "]
        },
        aadhar:{
                type:String,
                required:[true,'Enter Aadhar number ']
        },
        drivingskill:String,
        address:String,

});

module.exports = mongoose.model("skills",SkillsTech);