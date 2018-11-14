
var note1 = new note("Hello World")

describe('Note', function (){
   it('creates a note', function() {
     match(2+2, 4)
   });
 });

 describe('Other note', function () {
   it('comparing similar items', function() {
     instanceOf('1', 2)
   })
   it('compares other things', function() {
     match(3+3, 6)
   })
 })

 describe('Third note', function() {
   it('does something else entirely', function() {
     match(2*2, 4)
   })
   it('and something else', function() {
     match(2/2, 1)
   })
   it('and this thing, just to be sure', function() {
     match(6**6, 36)
   })
 })

 describe('note', function () {
    it('should be an instance of note', function() {
      instanceOf(note1, new note);
    })
 });

