function isPalindrome(str) {
 

    // Reverse the string
    const reversedStr = str.split('').reverse().join('');

   
    return str === reversedStr;


}


let input = "dad";
if (isPalindrome(input)) {
    console.log(`Given String "${input}" is a palindrome.`);
} else {
    console.log(`Given String "${input}" is not a palindrome.`);
}

input="madam";
if (isPalindrome(input)) {
    console.log(`Given String "${input}" is a palindrome.`);
} else {
    console.log(`Given String "${input}" is not a palindrome.`);
}

input="hello";
if (isPalindrome(input)) {
    console.log(`Given String "${input}" is a palindrome.`);
} else {
    console.log(`Given String "${input}" is not a palindrome.`);
}


console.log("---------------------------------------------------------------");


function areAnagrams(str1, str2) {
   
    const formatString = (str) => str.replace(/[^\w]/g, '').toLowerCase();
    
    // Format both strings
    str1 = formatString(str1);
    str2 = formatString(str2);

    // If their lengths are different, they cannot be anagrams
    if (str1.length !== str2.length) return false;

    // Sort characters in both strings
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');

    // Compare the sorted strings
    return sortedStr1 === sortedStr2;
}

let input1=areAnagrams( "Silent","listen"); 
console.log(`The Given Strings are "Silent"  and "listen": `);
if (input1==true) {
    console.log(`Anagrams.`);
} else {
    console.log(`Not Anagrams.`);
}

let input2=areAnagrams("Hello", "World"); 

console.log(`The Given Strings are "Hello"  and "World": `);
if (input2==true) {
    console.log(`Anagrams.`);
} else {
    console.log(`Not Anagrams.`);
}
let input3=areAnagrams("Such", "much")

console.log(`The Given Strings are "Such"  and "Much": `);
if (input3==true) {
    console.log(`Anagrams.`);
} else {
    console.log(`Not Anagrams.`);
}
