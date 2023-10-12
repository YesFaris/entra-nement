document.addEventListener("DOMContentLoaded", function(){
const soleil = document.getElementsByClassName("sun");
document.addEventListener("click", function(event){
    // let event = false;
    if (event.key === "click" ) {
        // event = true;
        soleil.style.transform = "scaleX(0.5)"
    }
  
})

});