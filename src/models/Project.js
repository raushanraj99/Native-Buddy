const mongoose = require("mongoose")

const Project = mongoose.Schema({
    ProjName:String,
    LcnImg:String,
    langUsed:String,
    AboutProj:String,
    url:String,
  })
module.exports = mongoose.model('projects',Project)