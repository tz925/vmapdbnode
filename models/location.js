const mongoose = require('mongoose')

const locationSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  area: String,
  position: { lat: Number, lng: Number },
  name: String,
  info: String,
  buyingPower: Number,
  dailyView: Number
})

module.exports = mongoose.model('Location', locationSchema)
