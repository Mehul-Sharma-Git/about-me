


window.onload=function(){
let hoveringInterest=function(event1,event2){
    document.getElementById(event1).onmouseover=function(){   
        this.style.backgroundColor = "#D1434F"
        this.style.transition="1s"
        document.getElementById(event2).style.color="#FFFFFF"
        document.getElementById(event2).style.transition="1s"
        this.style.width="75px"
        this.style.height="75px"

   }
   document.getElementById(event1).onmouseout=function(){
        this.style.backgroundColor="#1B212E"
        this.style.transition="1s"
        document.getElementById(event2).style.color="#D1434F"
        document.getElementById(event2).style.transition="1s"
        this.style.width="70px"
        this.style.height="70px"
   }
}
hoveringInterest("hover1","text1")
hoveringInterest("hover2","text2")
hoveringInterest("hover3","text3")
hoveringInterest("hover4","text4")
hoveringInterest("hover5","text5")
hoveringInterest("hover6","text6")
hoveringInterest("hover7","text7")
hoveringInterest("hover8","text8")
hoveringInterest("hover9","text9")
hoveringInterest("hover10","text10")


let hoveringSkills=function(event1,event2){
    document.getElementById(event1).onmouseover=function(){   
        this.style.backgroundColor = "#FFFFFF"
        document.getElementById(event2).style.color="#D1434F"
        this.style.transition="0.5s"
        document.getElementById(event2).style.background="#FFFFFF"
        document.getElementById(event2).style.transition="1s"
   }
   document.getElementById(event1).onmouseout=function(){
        this.style.backgroundColor="#D1434F"
        document.getElementById(event2).style.color="#FFFFFF"
        this.style.transition="0.5s"
        document.getElementById(event2).style.background="#D1434F"
        document.getElementById(event2).style.transition="1s"
   }
}
hoveringSkills("pro1","pronum1")
hoveringSkills("pro2","pronum2")
hoveringSkills("pro3","pronum3")
hoveringSkills("pro4","pronum4")
hoveringSkills("pro5","pronum5")
hoveringSkills("pro6","pronum6")
hoveringSkills("pro7","pronum7")
hoveringSkills("pro8","pronum8")

document.getElementById("resumebutton")

let hoveringNav=function(event){
    document.getElementById(event).onmouseover=function(){
        this.style.background="#D1434F"
        this.style.transition= "1s"

    }
    document.getElementById(event).onmouseout=function(){
        this.style.background="none"
        this.style.transition= "1s"
    }
}

hoveringNav("button1")
hoveringNav("button2")
hoveringNav("button3")
hoveringNav("button4")
hoveringNav("button5")
hoveringNav("button6")
hoveringNav("headname")


}
