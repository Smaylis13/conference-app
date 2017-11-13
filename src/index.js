
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
        console.log(data[i].firstname + " "+data[i].lastname)
})

let lay = new layout();
lay.render();
