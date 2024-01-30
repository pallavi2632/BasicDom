// querty selector ---- tage name, class name, id--- en sb ek through work krta hai
// query selector ---- first element ko hi bs xelect krta hai jaise agr do div ho to sirf phle wale ko hi krega

// const res= document.querySelector('body') //using tag name
// res.innerHTML= "<h1>Hello you are hacked</h1>"

// // innerHTML pure element ko select krk remove krne ke bad kya add krna wo krta hai..
// console.log(res)
// console.log(res.innerHTML)
// when we use innerHTML in console.log tb hm dekh skte hai ki uske andar hai kya..

// const pic= document.querySelector('div')
// pic.innerHTML= "<h2>Hello you are hacked</h2>"
// console.log(pic.innerHTML)

// const el =document.getElementById('head')
// el.style.color="red"
// el.parentElement.style.background="cyan"
// el.remove()

// const element =document.getElementsByClassName("parent")
// for(let i=0; i<element.length; i++){
//     // console.log(element.item(i))
//     element.item(i).style.background="blue"
// }

// const el= document.getElementById('clickButton');
// const nameBlock= document.getElementById('head')
// el.addEventListener("click",()=>{
//     nameBlock.style.color="green"
// })

// const el = document.getElementById("clickButton");
// const nameBlock = document.getElementById("head");
// el.addEventListener("click", () => {
//     // nameBlock.style.color = "red"
//   if (nameBlock.style.color === "red") {
//     nameBlock.style.color = "blue";
//   } else {
//     nameBlock.style.color = "yellow";
//   }
// });


const button =document.getElementById('clickButton');
const el= document.getElementById('container')

button.addEventListener("click", ()=>{
    const el=document.createElement("h1");
    el.innerHTML="supirya maurya";
    container.appendChild(el); // data show krne k liye use kiya jata hai
})
// 