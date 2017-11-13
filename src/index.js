
// Intégration de bootstrap (partie JS)
import 'bootstrap';

// Intégration de boostrap (partie CSS)
import 'bootstrap/dist/css/bootstrap.css'

import TalkService from './common/talk.service';
import layout from "./layout/index"

// intégration JQuery
window.$ = window.jQuery = require('jquery');


const talkService = new TalkService();

const tabSpeakers = talkService.findAllSpeakers()
let i = 0
tabSpeakers.then((data) => {
    for(i in data)
        console.log(data[i].firstname)
})



 // Etape 4 - Routeur 

 var router = () => {
    if (location.hash == '#speakers-list') {
    // TODO afficher vue liste des présentateurs
    } else if (location.hash == '#sessions-list') {
    // TODO afficher vue liste des sessions
    } else {
    // TODO afficher vue par défaut
    }
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