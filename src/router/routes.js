const express = require('express')
const router = express.Router()
const calculator = require('../controller/calculator')

router.get('/sum', calculator.sum)

router.get('/substract', calculator.substract)

router.get('/multiply', calculator.multiply)

router.get('/divide', calculator.divide)

module.exports = router
