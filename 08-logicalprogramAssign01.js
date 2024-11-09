console.log(`Given Array is:`);
let array=[10,20,45, 30,77,60];
console.log(array);
console.log(`=====Print Even Number in Array=====`);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if(element%2==0)
    {
        console.log(element);
        
    }
}
