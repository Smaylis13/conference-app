import TalkService from '../../common/talk.service';;

export default class listSessions{

    render(idView){
        const talkService = new TalkService();
        const tabSessions = talkService.findAllSessions()
        
        tabSessions.then(data => {
            let str = "<ul>"
        data.forEach(data => {
                str = str + `<a href='#session/${data.id}'><li> ${data.title} </li></a>`
            })
            str=str+"</ul>"
            $("#"+idView).html(str)
        })



    }
}