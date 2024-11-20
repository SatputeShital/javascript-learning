console.log("Given Array Is:");
 const arrayNumber=[20, 11, 40, 25,37, 49,9, 90, 60, 2, 19];
console.log(arrayNumber);
console.log("Sum Of All Element is:");
const sum = arrayNumber.reduce( (runningTotal, element) => {
    return runningTotal + element;
}, 0);
console.log(sum);

console.log("Find Multiple of 5 and Sum of Element :");
let multiplesOfFive = arrayNumber.filter((Element) =>
    {
       if(Element % 5 == 0)
       {
        // console.log(Element);
        return Element;
        
       }
    } );
    console.log("Multiple of 5 Element is:");
    console.log(multiplesOfFive);
    
    const sumOfMultipleFive = multiplesOfFive.reduce( (runningTotal, element) => {
        return runningTotal + element;
    }, 0);

    console.log("Sum of Multiple of 5 Element is:");
    console.log(sumOfMultipleFive);