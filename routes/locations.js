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
  const {name, area, position, info, buyingPower} = req.body
  const location = new Location({
    _id: new mongoose.Types.ObjectId(),
    name,
    area,
    position,
    info,
    buyingPower
  })
  location.save().then(result => {
    console.log(result)
    res.status(200).json(result)
  })
  .catch(err => console.log(err))
})

module.exports = router;
