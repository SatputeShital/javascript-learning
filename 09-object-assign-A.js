let professor={
    fullName : "Sukanya Roy",
    email: "sukanya@gmail.com",
    isMarried: true,
    age: 45,
    city:"Mumbai",
    degree: {
        engineering:"CSC",
        PHD:"Advance Computing"
      },
    certificates:["Hacker Rank Participation","Certificate in IFE course","Certificate in Adv Programming"]
};
console.log(`The Given Object is:`);
console.log(professor);

console.log(`Nested Object is:`);
console.log(professor.degree);


//console.log(`The Given Object is:`);
//console.log(professor);
professor.totalExperience="14 years";
console.log(`The accessing new added Total Experience property value is  is :${professor.totalExperience}`);

console.log("Property Email Is:");

console.log(professor.email);

professor.email="sukanyaroy@gmail.com";
console.log(`The After Modification in Email ID: ${professor.email}`);


console.log(professor.certificates);
professor.certificates.push("oracle Certified");
console.log(`After Adding new Certificate :${professor.certificates}`);

console.log(`Print the last Array in Object Professor is:`);
console.log(professor.certificates);

console.log("Traversing Array in Object");

let certificatesArray=professor.certificates
for (let index = 0; index < certificatesArray.length; index++) {
    const element = certificatesArray[index];
    console.log(element);  
}








