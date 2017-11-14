import TalkService from '../../common/talk.service';;

export default class session{

    render(id){
        const talkService = new TalkService();
        const tabSessions = talkService.findAllSessions()
        
        
        tabSessions.then(data => {
            let str = ""
            data.forEach(data => {
                if(data.id==id){
                    str+="<h1>"+data.title+"</h1>"
                    str+="<p>"+data.desc+"</p>"

                }
            })
            $("body").html(str);
        })



    }
}