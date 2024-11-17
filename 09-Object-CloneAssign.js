
let bankSbi=
{
   nameOfBank:"State Bank Of India",
   branchName:"Pune",
   ifscCode:46788999,
   phoneNumber:234567

}
let branchLocation={
    street:"Market Road",
    city:"Pune",
    pin:433011
}
console.log(`The bankSbi Object is`);
console.log(bankSbi);
console.log("----------------------------------------------------------------------");


console.log(`The bankSbi Object is`);
console.log(branchLocation);
console.log("----------------------------------------------------------------------");


const cloneBankSbi=Object.assign({},bankSbi);
console.log(`After Cloning bankSbi into cloneBankSbi:`);
console.log(cloneBankSbi);
console.log("----------------------------------------------------------------------");


const cloneBranchLocation=Object.assign({},branchLocation);
console.log(`After Cloning branchLocation into cloneBranchLocation :`);
console.log(cloneBranchLocation);
console.log("----------------------------------------------------------------------");

let rateOfInterest=
{
    homeLoanInterest:8.5,
    personalLoneInterest:10,
    dueInterest:9

}
 
console.log(`The rateOfInterest object is `);
console.log(rateOfInterest);
console.log("----------------------------------------------------------------------");

const sbiDetails=Object.assign({},bankSbi,branchLocation,rateOfInterest);
console.log(`The New Object sbiDetails is After Merging banksbi,branchLocation, rateOfInterest is: `);
console.log(sbiDetails);
console.log("----------------------------------------------------------------------");

console.log("=========Traversing the sbiDetails Object properties=======");
for (const key in sbiDetails) {
    if (Object.prototype.hasOwnProperty.call(sbiDetails, key)) {
        const element = sbiDetails[key];
        console.log( `${key} =   ${element}`);
    }
}

console.log(`Sha Key :4682e3f020f4922432760442b2a60bb6aa3b7ecf`);


