function show()
{
    console.log("Hello Everyone....");
    
}
show();

function details()
{
    console.log("My name is Shital.");
    
}
details();
console.log("----------------------------------");

function personalDetails(firstName ,lastName,collegeName)
{
    console.log("My First Name is", firstName);
    console.log("My Last Name is", lastName);
    console.log("My College Name is", collegeName);
    console.log("----------------------------------");
    console.log("My personal Details:",firstName, lastName, collegeName);
}
personalDetails("Shital","Satpute","KK Wagh College");
console.log("----------------------------------"); 
function addThreeValues(n1, n2, n3)
{
    console.log("Three Parameters Are:", n1, n2, n3);
    var result=n1+n2+n3;
    console.log("The result is:",result);
    console.log("----------------------------------"); 
    return result;
  
    
}

addThreeValues(10.23,600,40);
var returnValue=addThreeValues("Hello","Good","Morning");
console.log("concatenation of string: ",returnValue);


