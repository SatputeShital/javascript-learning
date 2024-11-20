const arrayNumbers=[20, 11, 40, 25, 23, 11, 9 , 31, 60 ,2, 19];
console.log("The Given Array IS:");
console.log(arrayNumbers);

console.log("====Step 1: Add 10 into each Element And Create New Array====");
const newArray=arrayNumbers.map((element) =>
{
    return element +10;

});
console.log("The New Array Is:");
console.log(newArray);

console.log("====Step 2: Cube of each Element And Create New Array====");

const cubeArray=arrayNumbers.map((element) =>
    {
        return element *element *element;
    
    });
    console.log("Given Array is:");
    console.log(arrayNumbers);
    
    
    console.log("Cube Element New Array Is:");
    console.log(cubeArray);

    console.log("====Step 3: Add the index value into its corresponding each array element and Create new array =====");

const addIndexValueArray=arrayNumbers.map((element, index) =>
    {
        return element+index;
    
    });
    console.log("Given Array is:");
    console.log(arrayNumbers);
    
    
    console.log(" New Array Is:");
    console.log(addIndexValueArray);