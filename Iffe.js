// IIFE---- Imemdiately invote function expression
// aisa function jo immediatly invoke ho rha h ya on the spot invoke ho rha hai use use IIFE khte hai
(function add(a,b){
    console.log(a+b);
})(2,3)


// (function el(){
//     console.log("hey")
// })();

(()=>console.log("hello my name is sheela"))()