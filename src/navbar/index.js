import template from "./navBar.html"
export default class navBar{
    render(){
        $("nav").html(template)
    }
}