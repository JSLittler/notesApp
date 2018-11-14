function showNoteBox() {
    var x = document.getElementById("note-add-box");
    if (x.style.display === 'none') {
        x.style.display = 'block';
    }
    else {
        x.style.display = 'none';
    }
}

function homeButton() {
  var x = document.getElementById('users-note');
  if (x.style.display === 'none') {
      x.style.display = 'block';
  }
  else {
      x.style.display = 'none';
  }
}

document.addEventListener('DOMContentLoaded', function () {
    console.log( "ready!" );
});
