var note1 = noteMaker("This is a message for testing")

 describe('Note', function (){
   it('creates a note', function() {
     match(note1.getNote(), "This is a message for testing");
   });
 });

 var note2 = noteMaker("This is a message for testing")

 describe('Note', function (){
  it('has a description', function() {
    match(note2.getNoteForDisplay(), "This is a message fo")
  });
});
