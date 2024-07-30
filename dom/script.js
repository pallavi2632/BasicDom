var bulb= document.querySelector('.bulb');
var but =document.querySelector(".btn");
but.addEventListener("click", function(){
    bulb.style.backgroundColor="yellow";
    bulb.innerHTML="this is the button"
})