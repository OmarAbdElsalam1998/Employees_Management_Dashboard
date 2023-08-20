// Start pop up
const popUpBtns=document.querySelectorAll(".pop-up-btn");
const popUpContainer=document.querySelector(".pop-up");
const popUpInner=document.querySelector(".pop-up .inner");
const closePopUpButton=document.querySelector(".pop-up .inner #ClosePopUP");
popUpBtns.forEach(btn=>{

    btn.addEventListener("click",function(){
        popUpContainer.classList.add("show");
        console.log("gg")
      })
})
popUpContainer.addEventListener("click",function(){
  this.classList.remove("show");
})
popUpInner.addEventListener("click",function(e){
   e.stopPropagation();
   console.log("ddd")
})


closePopUpButton.addEventListener("click",function(e){
    e.preventDefault()
    popUpContainer.classList.remove("show");

 })