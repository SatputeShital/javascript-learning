console.log("Given Array Is:");
 const arrayNumber=[20, 11, 40, 25,37, 49,9, 90, 60, 2, 19];
console.log(arrayNumber);

 console.log("====Find Number Greater than 50====");
 arrayNumber.filter((Element)=>
{
    if(Element>50)
    {
        console.log(Element);
        
    }
});
console.log("====Find Even Number====");
const evenNumber=arrayNumber.filter((Element)=>
{
    if(Element%2==0)
    {
        return Element
        
    }
});
console.log(evenNumber);

console.log("====Find Odd Number====");
const oddNumber=arrayNumber.filter((Element)=>
{
    if(Element%2==1)
    {
        return Element
        
    }
});
console.log(oddNumber);


console.log("====Find Multiple of 5====");
const multiplesOfFive = arrayNumber.filter((Element) =>
{
   if(Element % 5 == 0)
   {
    // console.log(Element);
    return Element;
    
   }
} );

console.log(multiplesOfFive);

console.log("====Find Numbers between 20 to 50====");
const findNumber=arrayNumber.filter((Element)=>
{
    if(Element>20 && Element<50)
    {
        return Element;
        
    }
});
console.log(findNumber);