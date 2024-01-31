function adder(num) {// num parameter
  function add(b) { // b parameter
    console.log(num + b); 
  }
  return add;
}
let addTo = adder(5);// first value assign
addTo(7); // second value assign

// -------------second way----------------------

function hello(name) {
  // with the help of paramtere
  function sayHello() {
    console.log(name); // console the value
  }
  return sayHello;
}

let res = hello("hello neha how are u"); // store the value another variable
res(); // call to it

// --------------first way to call closure-----------------

function main() {
  // main function
  let name1 = "supriya maurya";
  function sayName() {
    console.log(name1);
  }
  return sayName();
}
main();
main();
main();
