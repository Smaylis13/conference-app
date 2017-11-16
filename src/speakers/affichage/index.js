import TalkService from '../../common/talk.service';;

export default class speaker{

    render(id){
        const talkService = new TalkService();
        
        const tabSpeakers = talkService.findAllSpeakers()
        const tabSessions = talkService.findAllSessions()
        
        console.log(id)

        tabSpeakers.then(data => {tabSessions.then(sessions=>{

            let str = ""
            console.log(data)
            //data.forEach(speaker => 
            for(let i in data) {
                if(data[i].id==id){

                    str+=`<div class="container">
                            <h4>${data[i].lastname}+${data[i].firstname}</h4>
                            <img src="/images/${data[i].image}" width="300" height="350">
                            `
                    data[i].socials.forEach(function(social){
                        str+="<div class='raw'>"
                        str+=`<a href='${social.link}'>${social.class}</a>`
                        str+="<div>"
                    })
            

                    str+=`<h4>Ses sessions</h4>`
                    console.log(data[i].id)
                    for (let j in sessions ) {
                        console.log(sessions[j].speakers)
                        let i=0
                        for(let k in sessions[j].speakers){
                            if(sessions[j].speakers[k]==data[i].id){
                                str+=`
                                    <a href='#session/${sessions[j].id}'>${sessions[j].title}

                                    `
                                str+="<br>"
                            }
                        }
                    }

                    str+="</div>"

                }


            }
            $("#main-view").html(str);

        })})



    }
}