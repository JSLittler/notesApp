(function(exam) {
  function test(describe, it, testVar, matcher, testComp) {
    this.describe = describe
    this.it = it
    this.testVar = testVar
    this.matcher = matcher
    this.testComp = testComp

    if (this.matcher === toEqual) {
      outcome = (testVar === testComp)
    }
    if (this.matcher === toEq) {
      outcome = (testVar == testComp)
    }
    if (outcome === true) {
      result = "passed"
    } else {
      result = "failed"
    }
    return this.describe + this.it + result
  }
})(this)
