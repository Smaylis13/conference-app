import TalkService from '../../common/talk.service';;

export default class listSpeakers{

    render(idView){
        const talkService = new TalkService();
        const tabSpeakers = talkService.findAllSpeakers()
        
        tabSpeakers.then(data => {
            let str = "<h2> Liste des presentateurs </h2> <ul>"
            data.forEach(data => {
                str = str + "<li>" + data.firstname + "</li>"
            })
            str=str+"</ul>"
            $("#main-view").html(str)
        })



    }
}