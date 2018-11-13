document.addEventListener('DOMContentLoaded', function () {
    console.log( "ready!" );
});

function showFullNote() {
    var x = document.getElementById('note-add-list');
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
