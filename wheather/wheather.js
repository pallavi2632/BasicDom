const button =document.getElementById('click-btn')
const input= document.getElementById('username')
const username= document.getElementById('user')

button.addEventListener("click", ()=>{
    const value=input.value
    localStorage.setItem('name', value)
    location.reload()
})

window.localStorage('load', ()=>{
    const value=localStorage.getItem('name');
    user.innerText=value;
})







// const button = document.getElementById("search-btn");
// const input = document.getElementById("wheather-input");
// const cityName=document.getElementById('city-name')
// const cityTime=document.getElementById('city-time')
// const cityTemp=document.getElementById('city-temp')



// async function getData(cityName) {
//   const res = await fetch(
//     `http://api.weatherapi.com/v1/current.json?key=193906944f8d426f9c9113418243001 &q=${cityName}&aqi=yes`
//   );
//   return await res.json();
// }
// getData();

// button.addEventListener("click", async () => {
//   const val = input.value;
//   const result = await getData(val);
//   console.log(result);
//   cityName.innerText=`${result.location.name}, ${result.location.region} - ${result.location.country}`
//   cityTime.innerText=result.location.localtime
//   cityTemp.innerText=result.current.temp_c
// });
