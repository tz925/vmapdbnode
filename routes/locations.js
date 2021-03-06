const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Location = require('../models/location');

router.get('/', (req, res, next) => {
  Location.find({}, (err, result)=>{
    if(!err && result){
      res.status(200).send(result);
    }else{
      res.status(500).json({error: err})
    }
  })
})

router.post('/', (req, res, next) => {
  // console.log(req.body);
  const {name, area, position, info, buyingPower, dailyView} = req.body
  const location = new Location({
    _id: new mongoose.Types.ObjectId(),
    name,
    area,
    position,
    info,
    buyingPower,
    dailyView
  })
  location.save().then(result => {
    console.log(result)
    res.status(200).json(result)
  })
  .catch(err => console.log(err))
})

router.post('/populate', (req, res, next) => {
  const list = req.body.list
  console.log(list);
  list.forEach(async (location) => {
    const {name, area, position, info, buyingPower, dailyView} = location;
    const newLocation = new Location({
      _id: new mongoose.Types.ObjectId(),
      name,
      area,
      position,
      info,
      buyingPower,
      dailyView
    })
    await newLocation.save().then(result => console.log("good")).catch(err => console.log(err))
  })
  res.status(200).send("Okay!")
})

module.exports = router;
