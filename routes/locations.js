const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message:"hadnleing get req to /locations"
  })
})

router.post('/', (req, res, next) => {
  console.log(req.body);
  const { } = req.body
  const location = {

  }
})

module.exports = router;
