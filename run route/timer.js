var timer_text=document.getElementById("timer-text");
let timer_value=20

function timer_reduce() {
    timer_text.innerHTML=`The Creature catches up to you in ${timer_value}`
    timer_value-=1

    if (timer_value<0) {
        window.setTimeout(1000)
        window.location.href="https://hdaboom.github.io/text-adventure/run%20route/timeout-death.html"
    }

    else {
        window.setTimeout(timer_reduce,1000)
    }
}

window.setTimeout(timer_reduce,1000)

