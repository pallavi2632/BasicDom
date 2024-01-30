const button= document.getElementById('stop-btn')

function showTime(){
    const currentTime=new Date();
    console.log(currentTime);
    const time=`${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`
    document.getElementById("time").innerText=time;
    console.log(time)
}

let interval=setInterval(()=>console.log("hi"),1000)
showTime()

button.addEventListener("click",()=>{
clearInterval(interval)
})