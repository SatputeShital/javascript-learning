console.log(`======= flat() =========`);
const arrayN = [3, 6, [ 2, 1, [ 77, 88 ], 0 ], 9, 4]; 
const newArray = arrayN.flat(1);
console.log(newArray);

console.log(`====== Array with empty slots =========`);
const arrayNN = [3, 6, , 99, , , 4]; 
console.log(arrayNN.length);
console.log(arrayNN);
const arrayWithoutEmptySlots = arrayNN.flat();
console.log(arrayWithoutEmptySlots);
console.log(arrayWithoutEmptySlots.length);