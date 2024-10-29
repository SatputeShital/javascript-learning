// var string1;
function squareOfWordLength(string1) 
{
    console.log(`The given String is ${string1}`);
    
    var result=string1.length;

    console.log(`The length of word ${string1} is ${result}`);
    var squareOfWord=result**2;
    //used Exponential operator e.g. if square of 10 is 10**2=100
    
    // return squareOfWord;
    console.log(`The Square of word length is: ${squareOfWord}`);

    console.log(`------------------------------------------------------`);
    
    
}
squareOfWordLength("JavaScript");
squareOfWordLength("Google Chrome");
squareOfWordLength("Web Developer Smart");

//string operation 
var string2="I am Angular Developer";
function stringShow()
 {
    var stringLength=string2.length;
    console.log(`The length of string is: ${stringLength}`);
    // Split the string by spaces or other whitespace characters
    var trimWords = string2.trim();
    var totalWords=trimWords.split(/\s+/);
    var countOfWords=totalWords.length;
    console.log(`The count of words in string is : ${countOfWords}`);
    var result=stringLength/countOfWords;
    console.log(`The value of after divided by length is:${result}`);
    var multi=stringLength*countOfWords;
    console.log(`The value of after Multiply by length is:${multi}`);
    
    
    // Return the length of the resulting array
    //return words.length;
    
}
stringShow();