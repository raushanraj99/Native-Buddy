const express = require("express");
const app = express();
const routes = require("./route/main") // from main.js from src to main folder
const hbs = require("hbs");
const mongoose = require("mongoose")
const bodyParser=require("body-parser")
const Detail =require("./models/Navbar")
const Project =require("./models/Project")
const Skills = require("./models/SkillsTech")
const dotenv = require("dotenv")
dotenv.config()

// /static/css/style.css 
app.use(bodyParser.urlencoded({ // to parse the data in urlencoded form
    extended:true
}))
app.use('/static',express.static("public"));
app.use('',routes) // to use from the main.js file, befor using this we have to use const routes  = requre ("some valuue") to import

  
// template engine
app.set('view engine','hbs');
app.set("views","views");
hbs.registerPartials("views/partials") // get the value from partial folder from views


// db connections 
mongoose.set("strictQuery",true); // error resolves
const uri =`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@portfolio.kqwrgpq.mongodb.net/Native-buddy`;
mongoose.connect(uri,()=>{
    console.log("db connected");

    // Detail.create({
    //     brandName : "nativebuddy",
    //     links:[
    //         {
    //             label : "Home",
    //             url : "/"
    //         },
    //         {
    //             label:"Buddy",
    //             url : "/services"
    //         },
    //         {
    //             label:"Tourist",
    //             url : "/gallery"
    //         },
    //         {
    //             label:"About",
    //             url : "/about"
    //         },
    //         {
    //             label:"Contact us",
    //             url : "/contact-us"
    //         },
    //     ]
    // })


    

    // Projects 
    // Project.create([{
    //     ProjName:"Hawamahal",
    //      langUsed:"Old jaipur, rajasthan, 80XXX01",
    //      AboutProj:"Local area description along with popular places name and street food we can get there",
    //      url:"https://goo.gl/maps/Xz7wexVDYuiWdYWP8"
    // },
    // {
    //     ProjName:"JalMahal",
    //      langUsed:"Old jaipur, rajasthan, 80XXX01",
    //      AboutProj:"Local area description along with popular places name and street food we can get there",
    //      url:"https://goo.gl/maps/Xz7wexVDYuiWdYWP8"
    // },
    // {
    //     ProjName:"AmberFort",
    //      langUsed:"Old jaipur, rajasthan, 80XXX01",
    //      AboutProj:"Local area description along with popular places name and street food we can get there",
    //      url:"https://goo.gl/maps/Xz7wexVDYuiWdYWP8"
    // },
    // ])
    

    // Skills and technology
    //  Skills.create([
    //     {
    //                 Buddyname:"Raushan",
    //                 imgurl:"https://drive.google.com/uc?id=1HIkGsOTMIvArZZH9lFSP4cMUmZvDXDP2",
    //                 country:"india",
    //                 mail:"its99raj@gmail.com",
    //                 contactNo:8540959950,
    //                 Bio:"love to tour1",
    //                 Dob:"12 Aug 2002",
    //                 gender:"Male",
    //                 Hobby:"Listening music, playing cricket",
    //                 AreaKnown:"ujjain, jaipur, rajasthan",
    //                 experience:"image rhega",
    //                 review:"Best buddy ever seen"
    //       },
    //       {
    //                 Buddyname:"Harshita",
    //                 imgurl:"https://drive.google.com/uc?id=1HIkGsOTMIvArZZH9lFSP4cMUmZvDXDP2",
    //                 country:"india",
    //                 mail:"sahuharshita@gmail.com",
    //                 contactNo:8540959950,
    //                 Bio:"love to tour 2",
    //                 Dob:"12 Aug 2002",
    //                 gender:"Male",
    //                 Hobby:"Listening music, playing cricket",
    //                 AreaKnown:"ujjain, jaipur, Madhya pradesh",
    //                 experience:"image rhega",
    //                 review:"Awsome experience and details explaination"
    //        },
    //        {
    //                 Buddyname:"Ankit",
    //                 imgurl:"https://drive.google.com/uc?id=1HIkGsOTMIvArZZH9lFSP4cMUmZvDXDP2",
    //                 country:"india",
    //                 mail:"its99raj@gmail.com",
    //                 contactNo:7903342860,
    //                 Bio:"love to tour 3",
    //                 Dob:"12 Aug 2002",
    //                 gender:"Male",
    //                 Hobby:"Listening music, playing cricket",
    //                 AreaKnown:"ujjain, jaipur, Madhya pradesh",
    //                 experience:"image rhega",
    //                 review:"Awsome experience and details explaination"
    //        },
    //         {
    //                 Buddyname:"Arpit",
    //                 imgurl:"https://drive.google.com/uc?id=1HIkGsOTMIvArZZH9lFSP4cMUmZvDXDP2",
    //                 country:"india",
    //                 mail:"its99raj@gmail.com",
    //                 contactNo:8540959950,
    //                 Bio:"love to tour 3",
    //                 Dob:"12 Aug 2002",
    //                 gender:"Male",
    //                 Hobby:"Listening music, playing cricket",
    //                 AreaKnown:"ujjain, jaipur, Madhya pradesh",
    //                 experience:"image rhega",
    //                 review:"Awsome experience and details explaination"
    //             },
    //             {
    //                 Buddyname:"Ankit",
    //                  imgurl:"https://drive.google.com/uc?id=1HIkGsOTMIvArZZH9lFSP4cMUmZvDXDP2",
    //                  country:"india",
    //                 mail:"its99raj@gmail.com",
    //                 contactNo:8540959950,
    //                 Bio:"love to tour 3",
    //                 Dob:"12 Aug 2002",
    //                 gender:"Male",
    //                 Hobby:"Listening music, playing cricket",
    //                 AreaKnown:"ujjain, jaipur, Madhya pradesh",
    //                 experience:"image rhega",
    //                 review:"Awsome experience and details explaination"
    //             },
    //             {
    //                 Buddyname:"Khush",
    //                 imgurl:"https://drive.google.com/uc?id=1HIkGsOTMIvArZZH9lFSP4cMUmZvDXDP2",
    //                 country:"india",
    //                 mail:"its99raj@gmail.com",
    //                 contactNo:8540959950,
    //                 Bio:"love to tour 3",
    //                 Dob:"12 Aug 2002",
    //                 gender:"Male",
    //                 Hobby:"Listening music, playing cricket",
    //                 AreaKnown:"ujjain, jaipur, Madhya pradesh",
    //                 experience:"image rhega",
    //                 review:"Awsome experience and details explaination"
    //             },
    //             {
    //                 Buddyname:"Sayeed",
    //                 imgurl:"https://drive.google.com/uc?id=1HIkGsOTMIvArZZH9lFSP4cMUmZvDXDP2",
    //                 country:"india",
    //                 mail:"its99raj@gmail.com",
    //                 contactNo:8540959950,
    //                 Bio:"love to tour 3",
    //                 Dob:"12 Aug 2002",
    //                 gender:"Male",
    //                 Hobby:"Listening music, playing cricket",
    //                 AreaKnown:"ujjain, jaipur, Madhya pradesh",
    //                 experience:"image rhega",
    //                 review:"Awsome experience and details explaination"
    //             },
    //     ])


    // Buddy
    // Buddy.create([{
    //      name:"Raushan",
    //      url:"linksinputManual",
    //      rating:"start2",
    //      language:"String"
    // },
    // {
    //      name:"Raushan",
    //      url:"linksinputManual",
    //      rating:"start2",
    //      language:"String"
    // },
    // {
    //      name:"Raushan",
    //      url:"linksinputManual",
    //      rating:"start2",
    //      language:"String"
    // },
    // {
    //      name:"Raushan",
    //      url:"linksinputManual",
    //      rating:"start2",
    //      language:"String"
    // },
    
    // ])
    

})
 

app.listen(process.env.PORT | 5556,()=>{
    console.log("Server started at 5556 !");
});