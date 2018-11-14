document.addEventListener('DOMContentLoaded', function () {
    console.log( "ready!" );
});

function myFunction() {
    var x = document.getElementById('note-add-list');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
