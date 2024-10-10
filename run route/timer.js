var timer_text=document.getElementById("timer-text");
let timer_value=40

function timer_reduce() {
    timer_text.innerHTML=`The Creature catches up to you in ${timer_value}`
    timer_value-=1

    if (timer_value<0) {
        window.location.href="https://hdaboom.github.io/text-adventure/death%20pages/timeout-death.html"
    }

    else {
        window.setTimeout(timer_reduce,1000)
    }
}

window.setTimeout(timer_reduce,1000)

