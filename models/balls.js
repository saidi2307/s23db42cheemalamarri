const { Double } = require("mongodb")
const mongoose = require("mongoose")
const ballsSchema = mongoose.Schema({
// ball_name: String,
// ball_shape: String,
// ball_radius: Number
// })
ball_name: {
    type: String,
    required: true
},
ball_shape: {
    type: String,
    required: true
},
ball_radius: {
    type: Number,
    required: true,
    min: 0,
    max: 5000
}
});
module.exports = mongoose.model("balls",ballsSchema)