function LoadProgress() {
   var address=localStorage.getItem("Progress")
   if (address!=null) {
    window.location.href=`${address}`
   }
}
