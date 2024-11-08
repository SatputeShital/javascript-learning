
let array=["Banana", "Orange" , "Apple" , "Mango" , "Watermelon"];
console.log(`Given Array is:[ ${array} ]`);

console.log("====== Print first and Last element in Array List ==============");
let elementAtIndex0 = array[0];
console.log(`The first or Index 0 element in Array is: ${elementAtIndex0}`);
let lastElement=array[array.length-1];
console.log(`The Last element in Array is: ${lastElement}`);

console.log("====== Add element before first element in Array List ==============");
// console.log(`Array before insertion`);
// console.log(array);

array.unshift("Papaya");
console.log(`Array After insertion`);
console.log(array);

console.log("====== Remove element in Array List ==============");
// console.log(`Array before Delete Element`);
// console.log(array);
//array.shift();  method delete first element
//array.pop();  method delete last element
array.splice(4,1);
console.log(`Array After Delete Element`);
console.log(array);


console.log('============ Insert element at last Index in Array List ================');
// console.log('Before Insert Element');
// console.log(array);
array.splice(array.length, 0, "Pineapple");
console.log('After Insert Element');
console.log(array);

console.log('============ Insert element at specific Index in Array List ================');
// console.log('Before Insert Element before watermelon');
//const indexOfWatermelon = array.indexOf("Watermelon");
//console.log(`The index of Watermelon is ${indexOfWatermelon}`);
// console.log(array);
array.splice(4, 0, "DragonFruit");
console.log('After Insert Element');
console.log(array);

console.log('============ Replace element with another element in Array List ================');
// console.log('Before Replace Element ');
// console.log(array);
//const indexOfOrange = array.indexOf("Orange");
//console.log(`The index of Orange is ${indexOfOrange}`);
array.splice(2,1,"Kiwi");
console.log("After Replace Element");
console.log(array);

console.log('=========== Print element from index 1 t0 4 in Array list ===============');

// for (let index = 1; index <= 4; index++) {
//     const element = array[index];
//     console.log(`The Element from index 1 to 4 is : ${element}`);  
// }

let element=array.slice(1,4);
console.log(element);

console.log('=========== Print last 3 element in Array list ===============');
// let last3Element=array.slice(4,7);
// console.log(last3Element);

for (let index = 4; index < array.length; index++) {
    const element = array[index];
    console.log(element);
    
}