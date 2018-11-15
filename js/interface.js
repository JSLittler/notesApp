
document.addEventListener('DOMContentLoaded', function () {
    console.log( "ready!" );
    var button = document.getElementById("note_submit")
      button.addEventListener("click", function () {
      var mesg = add_note.value
      var textInput = noteMaker(mesg)
      var listItem = document.createElement("li")
      var linkItem = document.createElement("a")
      var parent = document.getElementById('list_links')
      linkItem.setAttribute("href", "javascript:SwapDivsWithClick('note_add','users_note')")
      linkItem.textContent = textInput.getNoteForDisplay();
        createTags(parent, listItem, linkItem)
        add_note.value = "";
      });
    });

function createTags(a, b, c) {
  var nodes = arguments;
    for(var i = 1; i < nodes.length; i++) {
      nodes[i - 1].appendChild(nodes[i]);
    }
  }


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
