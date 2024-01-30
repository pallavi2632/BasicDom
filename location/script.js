const button =document.getElementById("get-location");


function gotLocation(position){
console.log(position)
}
function failedToGet(){
    console.log("there was an issue")
}
button.addEventListener("click", async()=>{
navigator.geolocation.getCurrentPosition(gotLocation, failedToGet)
})