let displayFullScreenbBtn=document.querySelector("#zoom_out");

displayFullScreenbBtn.addEventListener("click",function()
{
    /* Get the documentElement (<html>) to display the page in fullscreen */
    var elem = document.documentElement;
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }

});



//show aside menu when click on bars

let showAsideMenuButton=document.querySelector(".bars");
showAsideMenuButton.addEventListener("click",function(){
    document.body.classList.toggle("toggle-aside")
    
});