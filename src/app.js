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

    
})
 

app.listen(process.env.PORT | 5556,()=>{
    console.log("Server started at 5556 !");
});