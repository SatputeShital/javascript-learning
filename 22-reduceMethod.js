console.log(`========== reduce() ================= `);
const arrayNumber = [3, 6, 2, 1, 9, 4]; 
const sum = arrayNumber.reduce( (runningTotal, element) => {
    return runningTotal + element;
}, 0);
console.log(sum);

console.log(` ========= Average mark ============ `);
const arrayMarks = [90, 60, 89, 80, 56, 45 ];
const sumMarks = arrayMarks.reduce( (runningTotal, element) => {
    return runningTotal + element;
}, 0);
console.log(sumMarks);
console.log(` Average marks is ${sumMarks/arrayMarks.length } `);