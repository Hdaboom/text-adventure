var Nothingbtn=document.getElementById("do-nothing-btn");
let timer_value=20

function timer_reduce() {
    Nothingbtn.innerHTML=`Do nothing in ${timer_value}`
    timer_value-=1

    if (timer_value<0) {
        Nothingbtn.innerHTML="yay"
    }

    else {
        window.setTimeout(timer_reduce,1000)
    }
}

window.setTimeout(timer_reduce,1000)

