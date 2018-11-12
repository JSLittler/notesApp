var test = {
  toEqual: function(x) {
    if (!x) {
      console.log("Test failed" + x + "is not passing")
    }
  }
}

function testRun() {
  var note = new Note();
  test.toEqual(note.addNote(2,2) === 4)
}

testRun();
