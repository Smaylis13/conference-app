import TalkService from '../../common/talk.service';;

export default class speaker{

    render(id){
        const talkService = new TalkService();
        
        const tabSpeakers = talkService.findAllSpeakers()
        const tabSessions = talkService.findAllSessions()
        
        console.log(id)

        tabSpeakers.then(data => {tabSessions.then(sessions=>{

            let str = ""
            data.forEach(speaker => {
                if(speaker.id==id){

                    str+=`<div class="container">
                            <h4>${speaker.lastname}+${speaker.firstname}</h4>
                            <img src="/images/${speaker.image}" width="300" height="350">
                            `
                    speaker.socials.forEach(function(social){
                        str+="<div class='raw'>"
                        str+=`<a href='${social.link}'>${social.class}</a>`
                        str+="<div>"
                    })
            

                    str+=`<h4>Ses sessions</h4>`
                    console.log(speaker.id)
                    sessions.forEach(function(s){
                        console.log(s.speakers)
                        let i=0
                        for(i in s.speakers){
                            if(s.speakers[i]==speaker.id){
                                str+=`
                                    <a href='http://localhost:8080/#session/${s.id}'>${s.title}
                                    `
                                str+="<br>"
                            }
                        }
                    })

                    str+="</div>"

                }


            })
            $("#main-view").html(str);

        })})



    }
}