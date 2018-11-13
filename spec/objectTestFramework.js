(function(exports) {
  function describe(string, it){
    console.log(string)
    it()
  }

  function it(string, match) {
    console.log(string)
    match()
  }

  function match(code, expected) {
    if(code === expected) {
      document.createElement(p)
    }
  }

  function similar (code, expected) {
    if(code == expected) {
      console.log('pass')
    }
  }
  exports.describe = describe
  exports.it = it
  // exports.match = match
  exports.mismatch = mismatch
})(this)
