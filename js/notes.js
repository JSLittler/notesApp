"use strict";

(function(exports) {

  var body;

  function getNote() {
    return body
  }

  function getNoteForDisplay() {
    return body.substring(0,20);
  }

  function noteMaker(noteBody) {
    body = noteBody

    return {
      getNote: getNote,
      getNoteForDisplay: getNoteForDisplay
    }
  }

  exports.noteMaker = noteMaker

})(this);
