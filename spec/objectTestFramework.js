function testOutcome(string) {
  var result = document.createElement("p")
  result.textContent = "test " + string
  result.setAttribute('class', string)
  document.body.appendChild(result)
}

function testHeading(string) {
  var title = document.createElement("h1")
  title.textContent = string
  title.setAttribute('id', 'title')
  document.body.appendChild(title)
}

function testSubHeading(string) {
  var subHeading = document.createElement("h3")
  subHeading.textContent = string
  subHeading.setAttribute('id', 'subHead')
  document.body.appendChild(subHeading)
}

(function(exports) {
  function describe(string, it){
    testHeading(string)
    it()
  }

  function it(string, test) {
    testSubHeading(string)
    test()
  }

  function match(codeToTest, expected) {
    if(codeToTest === expected) {
      testOutcome("pass")
    } else {
      testOutcome("fail")
      // console.log(codeToTest.stack)
    }
  }

  function instanceOf(codeToTest, expected) {
    if(codeToTest == expected) {
      testOutcome("pass")
    } else {
      testOu("fail")
    }
  }


  exports.describe = describe
  exports.it = it
  exports.match = match
  exports.instanceOf = instanceOf
})(this)
