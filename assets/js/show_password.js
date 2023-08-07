let show_password_buttons=document.querySelectorAll(".show_password");
if(show_password_buttons){
   
    show_password_buttons.forEach(button=>{
        let is_password_visible=false;

        button.addEventListener("click",function(){
            if(is_password_visible==false){
                this.setAttribute("src","assets/images/eye.webp");
                this.previousElementSibling.setAttribute("type","text")
                is_password_visible=true;
            }
            else{
                this.setAttribute("src","assets/images/eye_slash.webp");
                this.previousElementSibling.setAttribute("type","password")

                is_password_visible=false;
    
            }
        });
    });


}