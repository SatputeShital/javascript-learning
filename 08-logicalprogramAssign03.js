console.log(`=====Print the Count Of a character including Upper and Lower Case=====`);
const string="JavaScript LANGUAGE";
let countAChar=0;
for (const char of string) {
    if(char=='a'||char=='A')
    {
        countAChar=countAChar+1;

    }
    
}
console.log(`The Count of A character is : ${countAChar}`);
