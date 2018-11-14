"use strict";



(function(exports) {

  var body;
  var notesArray = []

  function getNote() {
    return notesArray[notesArray.length - 1]
  }

  function getNoteForDisplay() {
    return body.substring(0,20);
  }

  function noteMaker(noteBody) {
    body = noteBody
    notesArray.push(body)
    return {
      getNote: getNote,
      getNoteForDisplay: getNoteForDisplay
    }
  }

  exports.noteMaker = noteMaker
  exports.notesArray = notesArray

})(this);
