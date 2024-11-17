class Vehicle {
    constructor(makeName, modelName, price, color, fuelType, variant) {
        this.makeName=makeName;
        this.modelName=modelName;
        this.price=price;
        this.color=color;
        this.fuelType=fuelType;
        this.variant=variant;
        
    }
    details(){

        console.log(`Vehicle ${this.makeName} Details==`);

        console.log(`Model Name: ${this.modelName}, Price: ${this.price}, Color: ${this.color},Fuel Type: ${this.fuelType}, Variant: ${this.variant}`);  

    }    
    
}
console.log("-----------------Vehicle Details--------------");

const vehicleTata = new Vehicle("Tata","Nexon", "20lac"," Black", "Electric"," Automatic");

vehicleTata.details();
const vehicleMahindra = new Vehicle("Mahindra","Scorpio-N", "30lac"," Blue", "Diesel"," Automatic");
vehicleMahindra.details();
const vehicleKia = new Vehicle("Kia","Seltos", "19lac"," White", "Petrol"," Manual");
vehicleKia.details();
const vehicleHyundai = new Vehicle("Hyundai","Verna", "16lac"," Blue", "Diesel"," Automatic");
vehicleHyundai.details();
const vehicleMaruti= new Vehicle("Maruti","Swift", "14lac"," Red", "Petrol"," Manual");
vehicleMahindra.details();


console.log("-----------------College Details--------------");
class College {
    constructor(CollegeName, city, totalDepartment, university, collegeCode) {
        this.CollegeName=CollegeName;
        this.city=city;
        this.totalDepartment=totalDepartment;
        this.university=university;
        this.collegeCode=collegeCode;
    
        
    }
    display(){

        console.log(`College Name is  ${this.CollegeName} Details ==`);

        console.log(` Address: ${this.city}, Number Of Departments: ${this.totalDepartment},University: ${this.university}, College Code: ${this.collegeCode}`);  

    }    
    
}

const collegeSndt = new College("SNDT College","Mumbai", 12," Mumbai University", 100341);

collegeSndt.display();

const collegeKK = new College("K K Wagh Engg College","Nashik", 10," Pune University", 103456);
collegeKK.display();
const collegeSsgm = new College("S S G M College","Kopargaon", 10,"Pune University", 100201);
collegeSsgm.display();
const collegeSanjivani = new College("Sanjivani Engg College","Sanjivani",15, "Mumbai University",101234);
collegeSanjivani.display();
