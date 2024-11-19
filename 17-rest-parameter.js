function multiply(n1, ...n2) {
    console.log(n1,n2);
    
}
multiply(20);
multiply(12,14,10);
multiply(1,2,3,4,5,6);//n1= 1, n2=[2,3,4,5,6]

function divide(x,y=1) {
    console.log(x/y);
    
}
divide(20);
divide(20,10);

//Before ES6
const person ={
    firstName:"Akshay",
    age:25,
    grade:"A"

}
let firstName=person.firstName;
let age =person.age;
console.log(firstName, age);

//After ES5
const person={
   fullname:"Akshay",
    age:25,
    isMarried:"true"
}
let {fullname, age}=person;
console.log(fullname, age);
