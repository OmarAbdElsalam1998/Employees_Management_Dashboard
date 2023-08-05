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




//show search box when click on search icon in mobile view

let search_Icon=document.querySelector(".search-icon .icon")
let search_box= document.querySelector("#search-box-mob ");
let search_form= document.querySelector("#search-box-mob .search-form");


if(search_Icon){
  search_Icon.addEventListener("click",function(){
        search_box.classList.add("show");
  });

}

if(search_box){
  search_box.addEventListener("click",function(){
    search_box.classList.remove("show");
  });
}
if(search_form){
  search_form.addEventListener("click",function(e){
    e.stopImmediatePropagation();
  });
}