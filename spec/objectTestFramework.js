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

    return("hi from inside match")
  }

  function similar (code, expected) {
    if(code == expected) {
      console.log('pass')
    }
  }
  exports.describe = describe
  exports.it = it
  exports.match = match
})(this)
