
var note1 = new note("Hello World")

describe('Note', function (){
   it('creates a note', function() {
     match(2+2, 4)
   });
 });

 describe('note', function () {
    it('should be an instance of note', function() {
      instanceOf(note1, new note);
    })
 });
