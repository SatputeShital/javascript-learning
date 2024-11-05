var num;
console.log("====Check Number is Even Or Odd====");
console.log("");
var evenOrOdd=function(num)//anonymous function
 {
    if (num%2==0)
         {
            console.log(`The number ${num} is Even Number`);
            
            
          }
           else
         {
            console.log(`The number ${num} is Odd Number`);
          }
}
evenOrOdd(45);
evenOrOdd(70);
evenOrOdd(67);
evenOrOdd(98);

//console.log(`-------------------------------------------------`);
console.log("");
console.log("====Check Eligibility for vote====");
var age;
console.log("");
function eligibilityForVote(age) {
    if (age>=18) {
        
        console.log(`The Person with age of ${age} is eligible for Vote`);
        
    } else {
        console.log(`The Person with age of ${age} is Not eligible for Vote`);
    }
    
}
eligibilityForVote(18);
eligibilityForVote(20);
eligibilityForVote(17);
eligibilityForVote(40);
//console.log(`-------------------------------------------------`);
console.log("");
console.log("====Check String contains More then 10 characters====");
console.log("");
var string="JavaScript-ES6";
var stringLength=string.length;

var checkStringRequiredLength= function() {
    if (stringLength>=10) {
        console.log(`The "${string}" string contains more than 10 characters`);
        
    } else {
        console.log(`The "${string}" string contains less than 10 characters`);
    }
}
checkStringRequiredLength();
console.log("");
//console.log(`-------------------------------------------------`);
console.log("====Check String Starts with Java Word====");
console.log("");

var string;
var checkStringStartWord=function(string)
{
    var isstringStartWith= string.startsWith("Java");
    //console.log(isstringStartWith);
   if (isstringStartWith) {
      console.log(`The "${string}" is Starts with "Java" Word`);
      
   } else {
    console.log(`The "${string}" is does Not Starts with "Java" Word`);
   }
}
checkStringStartWord("JavaScript Language");
checkStringStartWord("Programming Language");

//console.log(`-------------------------------------------------`);

