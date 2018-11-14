
document.addEventListener('DOMContentLoaded', function () {
    console.log( "ready!" );
    var button = document.getElementById("note_submit")
      button.addEventListener("click", function () {
      var mesg = add_note.value
      var textInput = noteMaker(mesg)
      var listItem = document.createElement("li")
      var linkItem = document.createElement("a")
      linkItem.setAttribute("href", "javascript:SwapDivsWithClick('note_add','users_note')")
      linkItem.textContent = textInput.getNoteForDisplay();
      // listItem.textContent = linkItem
      document.getElementById('list_links').appendChild(listItem).
      add_note.value = "";
    });
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
