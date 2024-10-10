var timer_text=document.getElementById("timer-text");
let timer_value=20

function timer_reduce() {
    timer_text.innerHTML=`The creature catches up to you in ${timer_value}`
    timer_value-=1

    if (timer_value<0) {
        timer_text.innerHTML="yay"
    }

    else {
        window.setTimeout(timer_reduce,1000)
    }
}

window.setTimeout(timer_reduce,1000)

