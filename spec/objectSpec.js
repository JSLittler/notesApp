var note1 = noteMaker("This is a message for testing")

var note2 = noteMaker("This is a message for testing")

 describe('Note', function (){
   it('creates a note', function() {
     match(note1.getNote()[0], "This is a message for testing");
   });


  it('has a 20 character description', function() {
    match(note2.getNoteForDisplay(), "This is a message fo")
  });

  it('stores more than one note', function() {
    match(notesArray.length, 2)
  });
});
