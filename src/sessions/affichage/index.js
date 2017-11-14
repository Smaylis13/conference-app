import TalkService from '../../common/talk.service';;

export default class session{

    render(id){
        const talkService = new TalkService();
        const tabSessions = talkService.findAllSessions()
        
        const tabSpeakers = talkService.findAllSpeakers()
        
        tabSessions.then(data => {tabSpeakers.then(dataSpeaker=>{

            let str = ""
            data.forEach(data => {
                if(data.id==id){
                    str+=`<div class="container">
                            <h4>${data.title}</h4>
                            <p>${data.desc}</p>`
                    data.speakers.forEach(speaker=>{
                        dataSpeaker.forEach((speakerData)=>{
                            if(speakerData.id==speaker){
                                str+=`
                                        <img src="/images/${speakerData.image}" width="50" height="50">
                                        ${speaker}
                                      `
                                str+="<br>"
                            }
                        })
                    })
                    str+=`<a type="button" class="btn btn-primary" href="http://localhost:8080/#note/${data.id}" >Mes Notes</a>`
                    str+="</div>"
                   

                }
            })
            $("#main-view").html(str);

        })})



    }
}