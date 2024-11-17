
class Bank {
    constructor( bankName,branchName, ifscCode,location) {
   this.bankName=bankName;
   this.branchName=branchName;
   this.ifscCode=ifscCode;
   this.location=location;
    }
}

let sbiBank=
{
   bankName:"State Bank Of India",
   branchName:"Wakad",
   ifscCode:46788999,
   location:"wakad"

}
let yesbank=
{
   bankName:"Yes Bank",
   branchName:"Nagar",
   ifscCode:43657689,
   location:"Near Sg School"

}
let mahaBank=
{
   bankName:"Bank Of Maharashtra",
   branchName:"Nashik",
   ifscCode:567798098,
   location:"Near Punchvati stop"

}
let axisBank=
{
   bankName:"Axis Bank",
   branchName:"Kopargaon",
   ifscCode:243254677,
   location:"Near Gurudwara "

}
console.log(`The Bank Details Is:`);
console.log(yesbank);
console.log('---------------------------------------------------------');
console.log(sbiBank);
console.log('---------------------------------------------------------');
console.log(mahaBank);
console.log('---------------------------------------------------------');
console.log(axisBank);
console.log('---------------------------------------------------------');




