import template from "./note.html";

export default class note{
    
    render(id){
        $("#main-view").html(template);
        console.log("Mon id est "+id);
        if (localStorage.getItem("mesNotes"+id) != null)
            document.getElementById("textAreaNote").value = localStorage.getItem("mesNotes"+id);

            $("#saveNote").on('click', function (e) {
                
                if (typeof(Storage) !== "undefined") {
                    // Store
                    console.log("Save note")

                    localStorage.setItem("mesNotes"+id, document.getElementById('textAreaNote').value );
            
                } else {
                    document.getElementById("textAreaNote").value = "Sorry, your browser does not support Web Storage...";
                }
              });
    }
}