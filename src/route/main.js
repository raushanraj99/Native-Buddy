const express = require("express");
const { route } = require("express/lib/application");
const Navbar = require("../models/Navbar");
const Project = require("../models/Project");
const { response } = require("express");
const Contact = require("../models/Contact");
const Skills = require("../models/SkillsTech");
const routes = express.Router();
// const multer  = require('multer') // for uploading images
const Buddybooking = require("../models/buddybooking");

// image storage buddy registeration
// const storage = multer.diskStorage({
//   destination:function(req,file,cb){
//     return cb(null, "./public/uploads")
//   },
//   filename:function(req,file,cb){
//     // return cb(null,`${Date.now()}-${file.originalname}`)
//     return cb(null,`${file.originalname}`)
//   },
// });

// const upload = multer({storage:storage});


// home page
routes.get("/", async (req, res) => {
  const details = await Navbar.find({ _id: "64e3474f1c8f6e63df821419" });
  //console.log(details[0])

  const Projects = await Project.find(); // to get services data like icons and texts
  // Buddy details and skills.
  const skills = await Skills.find({});
  // console.log(skills[0]) // refresh the page to see the log

  res.render("index", {
    details: details[0],
    Projects: Projects,
    skills: skills, // skills check it for correction
  });
});

// gallery render
routes.get("/buddy", async (req, res) => {
  const details = await Navbar.find({ _id: "64e3474f1c8f6e63df821419" });

  const skills = await Skills.find({});
 
  res.render("buddy", {
    details: details[0],
    skills: skills,
  });
});

// about team 
routes.get("/about",async(req,res)=>{
  const details = await Navbar.find({ _id: "64e3474f1c8f6e63df821419" });

  res.render("Aboutus",{
    details: details[0],
  })
});


// Buddy bio data
routes.get("/buddybiodata", async (req, res) => {
  const details = await Navbar.find({ _id: "64e3474f1c8f6e63df821419" });
  
  const buddybiodata = await Skills.findById(req.query.id);
  // console.log(req.query.id)
  res.render("buddybiodata", {
    details: details[0],
    buddybiodata: buddybiodata,
  });
});

// Buddy register
routes.get("/registerbuddy", async (req, res) => {
  const details = await Navbar.find({ _id: "64e3474f1c8f6e63df821419" });

  res.render("registerbuddy",{
    details:details[0],
  })
});
routes.get("/contact-us",async (req,res)=>{
  const details = await Navbar.find({ _id: "64e3474f1c8f6e63df821419" });

  //console.log(details[0])
  res.render("contactus",{
    details:details[0],
  })
})


// user profile page
routes.get("/user", async (req, res) => {
  const details = await Navbar.find({ _id: "64e3474f1c8f6e63df821419" });
  // const Buddydata = await BuddyData.find();

  res.render("user", {
    details: details[0],
    // Buddydata:Buddydata,
  });
});

routes.get("/tourist", async (req, res) => {
  const details = await Navbar.find({ _id: "64e3474f1c8f6e63df821419" });
  
  res.render("user", {
    details: details[0],

  });
});

routes.get("/bookbuddy", async (req, res) => {
  const details = await Navbar.find({ _id: "64e3474f1c8f6e63df821419" });
  
  res.render("bookbuddypayment", {

    details: details[0],
  });
});


// All post method form submission
// ,upload.single('imgurl')
routes.post("/register-buddy" ,async(request,response)=>{
    console.log("Registered for the buddy")
    
    // console.log("Image name  "+ request.file.filename)


    
    try{
        const data = await Skills.create(request.body);
        // console.log("Image url : "+request.body.imgurl)
        // console.log("Data "+data);
        // response.redirect("/buddy");
        res.redirect("/")
    }
    catch(e){
        console.log(e);
        response.redirect("/buddy")
    }
});

// buddy payment record 
routes.post('/buddypayment', async(request,response )=> {
    console.log("Payment done ");

    try{
      const data = await Buddybooking.create(request.body);
      console.log(data);
      response.send(`
      <html>
          <head>
            <title>Payment Confirmation</title>
          </head>
          <body>
            <h1>Payment done</h1>
            <h1>Your Buddy will contact you soon</h1>
            <button onclick="window.location.href = '/buddy'">Go Back</button>
          </body>
        </html>
      `)
      // response.redirect("/buddy")
    }
    catch(e){
      console.log(e);
      response.redirect("/buddy")
    }

});



// form control process contact form
routes.post("/process-contact-form", async (request, response) => {
  console.log("form is submitted"); // data is coming from form, now to we have to parse the data. using body-parser
  // console.log(request.body)

  // save the data to db
  try {
    const data = await Contact.create(request.body);
    console.log(data);
    response.redirect("/");
  } catch (e) {
    console.log(e);
    response.redirect("/");
  }
});

module.exports = routes;
