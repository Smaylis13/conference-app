$(document).ready(function(){
    // Enregistrement des notes dans le localeStorage
$("#saveNote").on('click', function (e) {
    
   // localStorage['mesNotes']= document.getElementById('mesNotes').value;
    
    if (typeof(Storage) !== "undefined") {
        // Store
        localStorage.setItem("mesNotes", document.getElementById('textAreaNote').value );
        // Retrieve
       // document.getElementById("result").innerHTML = localStorage.getItem("mesNotes");
    } else {
        document.getElementById("textAreaNote").innerHTML = "Sorry, your browser does not support Web Storage...";
    }
  });
});