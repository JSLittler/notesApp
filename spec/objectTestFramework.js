(function(exports) {
  function describe(string, it){
    console.log(string)
    it()
  }

  function it(string, test) {
    console.log(string)
    test()
  }

  function match(codeToTest, expected) {
    if(codeToTest === expected) {
      console.log('pass')
    } else {
      console.log('fail')
    }
  }

  function instanceOf(codeToTest, expected) {
    if(codeToTest == expected) {
      console.log('pass')
    } else {
      console.log('fail')
    }
  }

  exports.describe = describe
  exports.it = it
  exports.match = match
  exports.instanceOf = instanceOf
})(this)
