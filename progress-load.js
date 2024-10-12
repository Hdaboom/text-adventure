function LoadProgress() {
   var address=localStorage.getItem("Progress")
   if (address!=null) {
    window.location.href=`${address}`
   }
}


function ProgressDelete() {
    localStorage.removeItem("Progress")
}