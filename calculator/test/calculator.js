var expect = require("chai").expect;
var moduleCalculator = require('../calculator.js');

var Calculator = moduleCalculator.calculator;

describe("Calculator", function(){
  it("Should have a sum method", function(){
    var c = new Calculator();
    expect(c.sum).to.be.a("function");
  });


  describe("#sum", function(){
    it("Should return 5 when enter 2 + 3", function(){
      var c = new Calculator();
      expect(c.sum(2, 3)).to.equal(5);
    });
  });
});
