import TalkService from '../../common/talk.service';

export default class listSpeakers{

    render(idView){
        const talkService = new TalkService();
        const tabSpeakers = talkService.findAllSpeakers()
        
        tabSpeakers.then(data => {
            let str = "<ul>"
            data.forEach(data => {
                str = str + `<a href='http://localhost:8080/#speaker/${data.id}'><li> ${data.firstname} + ${data.lastname} </li></a>`
            })
            str=str+"</ul>"
            $("#"+idView).html(str)
        })
    }
}