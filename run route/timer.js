var timer_text=document.getElementById("timer-text");
var action_button1=document.getElementById("action-button-1")
var action_button2=document.getElementById("action-button-2")
let timer_value=20

function timer_reduce() {
    timer_text.innerHTML=`The Creature catches up to you in ${timer_value}`
    timer_value-=1

    if (timer_value<=0) {
        action_button1.style.cursor="not-allowed"
        action_button1.style.opacity=0.6
        action_button1.setAttribute(href,"")
        action_button2.style.cursor="not-allowed"
        action_button2.style.opacity=0.6
        action_button2.setAttribute(href,"")
        window.setTimeout(1000)
        window.location.href="https://hdaboom.github.io/text-adventure/run%20route/timeout-death.html"
    }

    else {
        window.setTimeout(timer_reduce,1000)
    }
}

window.setTimeout(timer_reduce,1000)

