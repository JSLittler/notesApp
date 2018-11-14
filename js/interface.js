
document.addEventListener('DOMContentLoaded', function () {
    console.log( "ready!" );
});


function SwapDivsWithClick(div1,div2)

{
   d1 = document.getElementById(div1);
   d2 = document.getElementById(div2);
   if( d2.style.display == "none" )
   {
      d1.style.display = "none";
      d2.style.display = "block";
   }
   else
   {
      d1.style.display = "block";
      d2.style.display = "none";
   }

}

function TestNote() {
  note_view = document.getElementById("view_note").innerHTML += "<p>I had a lovely day!</p>";
}
