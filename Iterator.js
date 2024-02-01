// ots work with for of loop
// iterator function ye batat hai ki agr kabhi array aata hai to kis trh se print krna hai wo btana hau
// for(const val of [1,2,3,4,5]){
//     console.log(val)
// }

// generator function *it use for yeild calling otherwise it will show an error
function* count(){
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 11;
}
// console.log(count())

const even =count();

for(const v of even){
    console.log(v)
}