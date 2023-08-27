const mongoose = require("mongoose");
const Navbar = mongoose.Schema({
        brandName : String,
        links : [{
            label:String,
            url:String,
        },
    ], 
});

module.exports = mongoose.model("detail",Navbar);