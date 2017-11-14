
export default class TalkService {

    findAllSpeakers() {
        return $.get('http://localhost:3000/speakers');//[{id: 'sp1', fullname:'hello'}];
    }
	
	findAllSessions() {
        return $.get('http://localhost:3000/sessions');//[{id: 'sp1', fullname:'hello'}];
    }
}