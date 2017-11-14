import TalkService from '../../common/talk.service';;

export default class listSessions{

    render(idView){
        const talkService = new TalkService();
        const tabSessions = talkService.findAllSessions()
        
        tabSessions.then(data => {
            let str = "<h2> Liste des sessions </h2> <ul>"
            data.forEach(data => {
                str = str + "<li>"+ data.title + "</li>"
            })
            str=str+"</ul>"
            $("#main-view").html(str)
        })



    }
}