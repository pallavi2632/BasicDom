//--------- composite function kisi bhi do function ko compose krta hai.. its just like curring or closure-------------
// -------- koi task jo ek ek krk ek ke bad ek call hona hai to hm composite function use krte hao
function add(a, b) {
  return a + b; // ye diye hue number ko jodega
}

function square(val) {
  return val * val; // normally hi jo value ka square krega
}

function cube(el){
    return el*el*el
}

function addComposite(fn1, fn2, fn3) {
  return function (a, b,c) {
    // initial parameter ya value hm le skte hai dur=sre funciton ke andar
    return fn3(fn2(fn1(a, b,c))); // ye kya krega---- fn2-- ke andar fn1 ko call krk uske value ko pass krega
    // --- ess pure ko generic function khte hai
  };
}
const task = addComposite(add, square,cube); // ye dono function ko call krk
console.log(task(1, 4)); // yha pe argument diya gya hai

// ---------------in short form-------------
const c2f=(fn1,fn2,fn3)=>(a,b)=>fn3(fn2(fn1(a,b)));
const res=c2f(add, square,cube)
console.log(res(2,3))


// -----------bar bar function na bne uske liye hme composition of function ka use krna chiaye jaise addTosquare use kr rhe h

// function add(a,b){
//     return a+b; // ye diye hue number ko jodega
// }

// function square(val){
//  return val*val; // normally hi jo value ka square krega
// }

// function addToAndSquare(a,b){
//   return square(add(a,b)); // lekin ye a, b ko jo number milenge usko add krne ke bad square krega
// //   for exxample (a,b)=(2,3)=5
// // square =(val*val) =(5*5)=25
// }

// console.log(addToAndSquare(2,3))
