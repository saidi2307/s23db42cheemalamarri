const mongoose = require("mongoose")
const ballsSchema = mongoose.Schema({
ball_name: String,
ball_shape: String,
ball_radius: Number
})
module.exports = mongoose.model("balls",ballsSchema)