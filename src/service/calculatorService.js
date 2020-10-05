/**
 * Sum two variables
 */
function sum (a, b) {
  if (typeof (a) !== 'number' || typeof (b) !== 'number') throw new Error('Two variables required')
  return a + b
}

/**
 * Substract two variables
 */
function substract (a, b) {
  if (typeof (a) !== 'number' || typeof (b) !== 'number') throw new Error('Two variables required')
  return a - b
}

/**
 * Multiply two variables
 */
function multiply (a, b) {
  if (typeof (a) !== 'number' || typeof (b) !== 'number') throw new Error('Two variables required')
  return a * b
}

/**
 * Divide two variables
 */
function divide (a, b) {
  if (typeof (a) !== 'number' || typeof (b) !== 'number') throw new Error('Two variables required')
  if (b === 0) throw new Error('Unable to divide by zero')
  return a / b
}

module.exports = {
  sum,
  substract,
  multiply,
  divide
}