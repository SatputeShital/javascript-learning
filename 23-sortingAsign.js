const arrayRollNumber=[113, 45, 56, 11, 32, 45, 109, 799, 56, 45 ];
console.log("Given Array:");
console.log(arrayRollNumber);



console.log(`======Sorting in descending order=======`);
const reverseArray=arrayRollNumber.reverse();
console.log(reverseArray);

console.log("======Sorting without custom code======");
const withoutCustomSort =arrayRollNumber.sort();
console.log(withoutCustomSort);

console.log(" ======= Sorting with Custom Code ===== ");
const sortingWithCustomCode=arrayRollNumber.sort( (n1, n2)=> {
    return n1 > n2 ? 1  : -1;
});

console.log(sortingWithCustomCode);
console.log(" =======Print Greatest Number in Array ===== ");

const greatestNumber=sortingWithCustomCode[9];
// console.log(`The Greatest Number in Array`);
console.log(greatestNumber);

console.log(" =======Print Smallest Number in Array ===== ");

const smallestNumber=sortingWithCustomCode[0];
// console.log(`The Greatest Number in Array`);
console.log(smallestNumber);

console.log(" =======Remove Duplicate Number in Array ===== ");

const uniqueArray = sortingWithCustomCode
  .filter((value, index, sortedArray) => index === 0 || value !== sortedArray[index - 1]);

console.log(uniqueArray); // Logs the array without duplicates