const employee= `{
    "name": "Aleix Melon",

    "id": "E00245",

    "role": ["Dev", "DBA"],

    "age": 23,

    "doj": "11-12-2019",

    "married": false,

    "address": {

            "street": "32, Laham St.",

           "city": "Innsbruck",

           "country": "Austria"

           },

    "referred-by": "E0012"

}`


console.log(`The DataType of Employee Data :${typeof employee}`);
console.log(`TheEmployee Information is: ${employee}`);
console.log(`===== JSON String to Object conversion =======`);
const employeeDataInObjectFormat = JSON.parse(employee);
console.log(`The DataType of Employee Data :${typeof employeeDataInObjectFormat}`);
console.log(`TheEmployee Information is: `);
console.log(employeeDataInObjectFormat);

let empRole=employeeDataInObjectFormat.role[0];
// console.log(employeeDataInObjectFormat.role[0]);
console.log("Role Of Employee :",empRole);


let result=employeeDataInObjectFormat.name.split(" ")[1];
console.log("Last Name Of Employee :",result);
// console.log(result);


let year=employeeDataInObjectFormat.doj.split("-")[2];
console.log("Joining Year of Employee :",year);






