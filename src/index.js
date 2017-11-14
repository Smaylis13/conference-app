
// Intégration de bootstrap (partie JS)
import 'bootstrap';

// Intégration de boostrap (partie CSS)
import 'bootstrap/dist/css/bootstrap.css'

import TalkService from './common/talk.service';
import layout from "./layout/index"
import listSpeakers from "./speakers/list/index"
import listSessions from "./sessions/list/index"
<<<<<<< HEAD
import navBar from "./navbar/index"
import vueAccueil from "./defaultVue/index"
=======
import logo from "./logo/index"
import session from "./sessions/affichage/index"
>>>>>>> 46b705e9b1dd231fedf254e555042e62c3c94562

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

