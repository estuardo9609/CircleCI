const chai = require('chai')
const expect = chai.expect
const calculator = require('../service/calculatorService')

describe('calculatorService', () => {
  context('sum', () => {
    it('Should return an operation result', () => {
      expect(calculator.sum(1,2)).to.equal(4)
    })
  })
})