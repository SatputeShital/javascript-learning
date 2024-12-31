let array1=[1, 2, 3, 4, 5, 6 ,7, 8, 9, 10];
// console.log("The Given Array Is:");
console.log(`Array of Number is: [ ${array1} ]`);
console.log(" ");

console.log("=== Map Method ===");
const arrayMap=array1.map((element)=>
{
    return element*2;
});
console.log(`The Doubled Number Array is:`);
console.log(`[ ${arrayMap} ]`);

console.log(" ");
console.log("=== Filter Method ===");

const arrayFilter=array1.filter((element)=>
{
    return element%2==0;
});
console.log(`The Even Number Array is : [ ${arrayFilter} ]`);
console.log(" ");
console.log("=== Array Desturing ===");
let array=[10, 20, 30, 40, 50];

const [n1, n2, n3, n4, n5]=array;
console.log(`Array is: [ ${array} ]`);
console.log(`Array Desturing is: n1 : ${n1}
                    n2 : ${n2}
                    n3 : ${n3}`);

                    console.log();
console.log(`=== Spread Operator/ Rest Operator ===`);
console.log(`Array 1: [ ${array1} ]`);
console.log(`Array 2: [ ${array} ]`);
let arrayNew=[...array1, ...array];
console.log(`New Array is :[ ${arrayNew} ]`);

console.log(" ");
console.log("=== Object Student ====");
let objStudent={ 
                 "name": "JJ",
                 "age": 25,
                 "scores":{
                          "Math":84,
                          "English": 78,
                          "History": 92
                 }
};

console.log(`The Student Object is :`);
console.log(objStudent);
console.log(`Nested Object Scores is:`);
console.log(objStudent.scores);

console.log(" ");
console.log("=== Object Desturing ===");
const {name, age}=objStudent;
console.log(`Student Name is: ${name}  Age : ${age}`);
// console.log(name, age);

console.log(" ");
console.log("=== function that takes any number of scores as arguments and returns their average using the rest operator ===");
function calculateAvg(...scores)
{
    const total = scores.reduce((sum, score) => sum + score, 0); 
    return total / scores.length; 
}
const avg=calculateAvg(69,45);
console.log(` Passing Scores is : 69, 45 & Average Score Is: ${avg} `);


 console.log(`Passing Scores is : 87, 91, 75, 80 & Average Score is : ${calculateAvg(87,91,75,80)}`);
 







                    


