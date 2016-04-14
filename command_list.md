# init project
`npm init`

# install libraries
`npm install mocha`
`npm install chai --save`

# save current configuration
`git add package.json`
`git commit -m "Add mocha and chai libs"`

# start with the first test
`mkdir test`
`vi test/calculator.js`

  ```
  var Calculator = require('../calculator.js')
  ```
# Check that it fails
`mocha`

# Passing the test
`touch calculator.js`
`mocha`

# Configurate project to run tests
`vi package.json`
add "test": "mocha"

# Commit changes
`git add package.json calculator.js test/calculator.js`
`git commit -m "Basic test suite configuration"`

# Add a real test
`vi test/calculator.js`

  ```
var expect = require("chai").expect;
var moduleCalculator = require('../calculator.js');

var Calculator = moduleCalculator.calculator;

describe("Calculator", function(){
  it("Should have a sum method", function(){
    var c = new Calculator();
    expect(c.sum).to.be.a("function");
  });
});
  ```

# Check that if fail
`npm test`

# Implement it
```
function Calculator(){
}

Calculator.prototype.sum = function(){
}

module.exports.calculator = Calculator;
```

# Chech that it pass
`npm test`

# Save changes
 ```git add calculator.js
    git add test/calculator.js
    git commit -m "Create calculator Class and add 'sum' function to it"
  ```

# A whole feature
(add a test to the sum function)
``` describe("#sum", function(){
    it("Should return 5 when enter 2 + 3", function(){
      var c = new Calculator();
      expect(c.sum(2, 3)).to.equal(5);
    });
  });```

(implement the sum function)
```
Calculator.prototype.sum = function(a, b){
  return a + b;
}```

(test that it works)
`npm test`

(save the changes)
```
git add test/calculator.js calculator.js
git commit -m "Implement Calculator#sum"
```
