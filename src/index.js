
// Intégration de bootstrap (partie JS)
import 'bootstrap';

// Intégration de boostrap (partie CSS)
import 'bootstrap/dist/css/bootstrap.css'

import TalkService from './common/talk.service';
import layout from "./layout/index"
import listSpeakers from "./speakers/list/index"
import listSessions from "./sessions/list/index"

import navBar from "./navbar/index"
import vueAccueil from "./defaultVue/index"

import logo from "./logo/index"
import session from "./sessions/affichage/index"


// intégration JQuery
window.$ = window.jQuery = require('jquery');


const talkService = new TalkService();

const tabSpeakers = talkService.findAllSpeakers()
/*
tabSpeakers.then((data) => {
    for(i in data)
        console.log(data[i].firstname)
})
*/


 // Etape 4 - Routeur 
 
 var router = () => {
    let id= location.hash.split("/")[1]
    if (location.hash == '#speakers-list') {
        let list= new listSpeakers();
        list.render("main-view");
    } else if (location.hash == '#sessions-list') {
        let list= new listSessions();
        list.render("main-view");

    } else if (location.hash == `#session/${id}`) {
        console.log(id)
        let s= new session();
        s.render(id);
    }
    else {
        let defvue = new vueAccueil();
        defvue.render()    }
 }

    window.addEventListener('load', () => {
    window.onhashchange = () => {
    router();
    };
    router();
    });


// ................
let lay = new layout();
lay.render();

// nav Bar 

let nav = new navBar();
nav.render()

// Note ceci permet de récupérer l'évenement du bouton enregistrer afin de le stocker dans LOCALSTorage
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
// fin note