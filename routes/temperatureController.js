var express = require('express');
var router = express.Router();
const business = require('../business/temperatureBusiness')

/* GET users listing. */
router.get('/', async function (req, res, next) {
  let values = await business.getTemperature()
  res.status('200').send(values)
});



module.exports = router;
