
export default class TalkService {

    findAllSpeakers() {
        return $.get('speakers');//[{id: 'sp1', fullname:'hello'}];
    }
	
	findAllSessions() {
        return $.get('sessions');//[{id: 'sp1', fullname:'hello'}];
    }
}