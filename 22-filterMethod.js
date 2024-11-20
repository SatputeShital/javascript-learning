console.log(`======== filter() method to get even numbers ==============`);
const arrayNum = [3, 6, 2, 1, 9, 4];
const arrayEven = arrayNum.filter( (element) => {
    return element %2 == 0;
} );
console.log(arrayEven);