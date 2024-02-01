// currying- -------- ek function ke andar dusra function call hona uske andar fir naya function call hina hi curring hota hai 
   
// curring------------ 
function add(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}
console.log(add(14)(1)(3)) // yha pe arguments pass kiye ja  rhe hai agr esme se miss hoga to ni chlega funciton


// new things to learn
const plus =(a)=>(b)=>(c)=> a+b+c;
console.log(plus(2)(4)(6))

//  -----------------normal function 
// function add(a, b, c) {
//   return a + b + c;
// }
// console.log(add(2, 5, 8));
