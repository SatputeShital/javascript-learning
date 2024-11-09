console.log(`=====Print the Count Of Vowels=====`);

const mylove="I Love Only JavaScript";
console.log(`Given string is:" ${mylove} "`);

//let vowelsInString="a, e, i, o, u, A, E, I, O, U";
let aCountOfVowels=0;
for (const char of mylove) {
     if(char=='a'||char=='A'||char=='e'||char=='E'||char=='i'||char=='I'||char=='o'||char=='O'||char=='u'||char=='U')
     {
        aCountOfVowels=aCountOfVowels+1;

     }
    
}
console.log(`The Count of vowels is:${aCountOfVowels}`);
