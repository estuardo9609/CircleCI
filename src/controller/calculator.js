const calculator = require('../service/calculatorService')

/**
 * Add
 */
const sum = async (req, res, next) => {
  try {
    let result = calculator.sum(parseInt(req.query.a), parseInt(req.query.b))
    res.json({result: result})
  } catch (e) {
    res.status(400).json({message: e.message})
  }
}

/**
 * Substract
 */
const substract = async (req, res, next) => {
  try {
    let result = calculator.sum(parseInt(req.query.a), parseInt(req.query.b))
    res.json({result: result})
  } catch (e) {
    res.status(400).json({message: e})
  }
}

/**
 * Multiply
 */
const multiply = async (req, res, next) => {
  try {
    let result = calculator.sum(parseInt(req.query.a), parseInt(req.query.b))
    res.json({result: result})
  } catch (e) {
    res.status(400).json({message: e})
  }
}

/**
 * Divide
 */
const divide = async (req, res, next) => {
  try {
    let result = calculator.sum(parseInt(req.query.a), parseInt(req.query.b))
    res.json({result: result})
  } catch (e) {
    res.status(400).json({message: e})
  }
}

module.exports = {
  sum,
  substract,
  multiply,
  divide
}