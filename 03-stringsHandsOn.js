var string="Hey you are doing good, Keep it up  ";
function stringHandsOn()
{
    console.log(string);

    //length of the string
    console.log(`The length of the String is : ${string.length}.`);
    console.log("------------------------------------------------");
    

    //remove spaces from string and print size of 
    var result=string.trim();
    console.log(`String After removing Space: ${string.trim()}`);
    console.log(`The length of string after using trim() function: ${result.length}`);
    
    //First word of string
    var charAtIndex0 =result.charAt(0);
    console.log(`Character at index 0 is : ${charAtIndex0}`);

    //last word of string
    var charAtLastIndex = result.charAt(result.length-1);
    console.log(`Character at last index is : ${charAtLastIndex}`);

    console.log(`The length of string is: ${result.length}`);
    
    //find index of perticular word
    var word="good";
    var indexOfWord=result.indexOf(word);
    console.log(`Index of word "Good" is: ${indexOfWord} `);
    console.log("------------------------------------------------");

    //print the substring
    var string2= result.substring(22,result.length);
    console.log(`String From Index 22 is : ${string2}`);

    //check weather the string end with "up" word
    var word="up";
    var endString= result.endsWith(word);
    console.log(`The string ends with "up" or not: ${endString}`);
    
    //check weather the string starts with "Hey" word
    var word="Hey";
    var startsString= result.startsWith(word);
    console.log(`The string start with "Hey" or not: ${startsString}`);
    // console.log("------------------------------------------------");
    
    

    
}
stringHandsOn();