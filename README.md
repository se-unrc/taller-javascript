#Nodejs workshop

## How to install nodejs?
```bash
sudo apt-get install nodejs #For linux users

brew install nodejs #For os x users
```

## Starting a node app
```
$ npm init
```

## Running the app
```bash
nodejs app.js #For linux users

node app.js #For os x users
```

## Installing test framework

```bash
$ npm install -g mocha
$ mkdir test
```

```bash
$ npm install chai
```

```
$ $EDITOR test/test.js
var expect = chai.expect;
describe('Array', function() {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      expect([1,2,3].indexOf(5)).to.equal(-1);
    });
  });
});
```

```
$ mocha
```

