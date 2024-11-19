console.log("======Using Arrow Function=========");

console.log();
console.log('-----with no argument and no return value----- ');
let display = () => {
    console.log(`Good Morning ....Today is Tuesday`); 
}
display();

console.log(' ------with arguments and no return value -----  ');
let multiply = (n1, n2, n3=1) => {
    console.log(` Multiplication of (${n1},${n2},${n3}) is ${n1* n2 *n3}`); 
}
multiply(5, 5, 2);
multiply(10, 4);

console.log('------ with arguments and return value ------  ');
let add = (n1 ,n2, n3, n4, n5 )=>{
    let result = n1 + n2 + n3 + n4 +n5 ;
    return result;
}
let addition = add(100, 100, 200,349,756 );
// console.log(`Addition of ${n1},${n2},${n3}, ${n4},${n5} is:`);//error
console.log(`Addition of is:`);//error
console.log(addition);


let stringConcat= add("I am ", "Learning ","ES6 ", "Features ","in depth");
console.log(`The Concatenation of strings is:`);
console.log(stringConcat);

