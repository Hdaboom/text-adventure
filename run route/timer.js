var Nothingbtn=document.getElementById("do-nothing-btn");
let timer_value=20

function timer_reduce() {
    timer_value-=1
    Nothingbtn.innerHTML=`Do nothing in ${timer_value}`

    if (timer_value<0) {
        Nothingbtn.innerhtml="yay"
    }

    else {
        window.setTimeout(timer_reduce,1000)
    }
}

window.setTimeout(timer_reduce,1000)

