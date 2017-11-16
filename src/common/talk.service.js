
export default class TalkService {


    findAllSpeakers() {
        return new Promise((resolve,rej) =>
        $.get('https://raw.githubusercontent.com/2017-d13/conference-data/master/speakers.json')
        .then(data => resolve(JSON.parse(data)))        );
    }
	
	findAllSessions() {
        return new Promise((resolve,rej) =>
        $.get('https://raw.githubusercontent.com/2017-d13/conference-data/master/sessions.json')
        .then(data => resolve(JSON.parse(data)))        );
    }
	    
}