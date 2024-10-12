function LoadProgress() {
   var address=localStorage.getItem("Progress")
   if (address===null) {
    pass
   }
   else {
    window.location.href=`${address}`
   }
}
