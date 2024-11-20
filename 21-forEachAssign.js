const arrayNum= [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];
console.log(`The Given Array Is: ${arrayNum}`);

console.log(`===Step 1: Log Element with Index Using For each===`);
arrayNum.forEach((element, index) => {
    console.log(` Element => ${element} and Index of Element => ${index}`);
});

console.log(`====Step 2: Find The Positive Number====`);
//console.log("The Positive Number in Given Array Is : ");

arrayNum.forEach((element)=>
{
    if(element > 0)
    {
        console.log(element);  
    }
    // else
    // {
    //    
    //     const negativeNum=element;
    // }
}
);

console.log(`====Step 3: Print Negative Array And In New Array====`);
const arrayNegative=[];
arrayNum.forEach((element)=>
{
  if(element<0)
  {
    
    
   arrayNegative.push(element);
    
  }

});
//console.log("The New Array with Negative Number is ");
console.log(arrayNegative);

console.log(`====Step 4: Find Even Number===`);

arrayNum.forEach((element)=>
{  
   if(element%2==0){
    console.log(element);
   }
    
    
});

console.log("====Step 5: find total number of Element====");

const sum=arrayNum.reduce((runningTotal,element)=>
{
   return runningTotal + element;
}, 0);
console.log(`The Total Value Of Element is: ${sum}`);


console.log("====Step 6: Print Even Number index value====");
arrayNum.forEach((element, index)=>
{
   if(index%2==0)
   {
         console.log(`Index is ${index} and Value is ${element}`);
        
   }
});
