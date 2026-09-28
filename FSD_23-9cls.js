class student{
    static count=0;

    constructor(name,roll,marks){
        this.Name=name;
        this.Roll_no=roll;
        this.Marks=marks;
        student.count++;
    }
    display(){
        console.log("student information: ");
        console.log(this.Name);
        console.log(this.Roll_no);
        console.log(this.Marks);
        if(this.Marks>= 40){
            console.log("Pass ");
        }else{
            console.log("fail");
        }
    }
    static total(){
        console.log("total student :", this.count);
    }
}

let s1= new student("Mukeem",2503215300118, 95);
let s2= new student("nitin",2503215300127,6)

s1.display();
s2.display();
student.total();



//Bank Account Management System
//Create a class BankAccount with accountNo, holderName, and balance. Use a constructor to initialize the account.
//  Provide instance methods deposit(amount), withdraw(amount), and displayBalance(). 
// Withdrawal should not be allowed when the requested amount is greater than the available balance. 
// Create a static method bankInfo() that displays the bank name and general banking information. 
// Create two account objects and perform different transactions on them.
//Concepts Covered: Constructor, Objects, Instance Methods, Static Method, Object State

class bank_account{

    constructor(ac,name,bal){
        this.Account_no= ac;
        this.Account_holder=name;
        this.Balance=bal;
    }

    deposite(amount){
        this.Balance+=amount;
        console.log("ammount deposited: ", amount);
        console.log("total bal= ", this.Balance);
    }

    withdraw(amot){
        if(this.Balance<amot){
            console.log("not sufficent balance :");
        }else{
            this.Balance-=amot;
            console.log("withdraw succesfull :")
            console.log("available balance ", this.Balance);
        }
    }

    totalbalance(){
        console.log("total_balance :",this.Balance);
    }

    info(){
        console.log("Account holder info");
        console.log(this.Account_holder);
        console.log(this.Account_no);
        console.log(this.Balance);
    }
}

// let a2= new bank_account(1233,"xyz",1000);
// let a1= new bank_account(2234,"Mukeem",50000);

// a1.deposite(10000);
// a2.deposite(5000)
// a2.withdraw(456745678);
// a1.info();
// a2.info();



/*  Create a base class Employee containing id, name, and basicSalary. 
Initialize them using a constructor and create a method calculateSalary() that returns the basic salary.
 Create a derived class Manager that adds an incentive property. Use super() to initialize inherited properties
  and override calculateSalary() so that a manager's total salary is calculated as basicSalary + incentive. 
  Create objects of both classes and display their salaries.
Concepts Covered: Inheritance, extends, super(), Constructor, Method Overriding
 */
class employee {
    constructor(id, name, salary) {
        this.Id = id;
        this.Name = name;
        this.Salary = salary;
    }

    displayinfo() {
        console.log("ID :", this.Id);
        console.log("Name :", this.Name);
        console.log("Salary :", this.Salary);
    }

    total_amount(amount) {
        this.Salary += amount;
        return this.Salary;
    }
}

class demo extends employee {

    constructor(id, name, salary, department) {
        super(id, name, salary);
        this.department = department;
    }

    show() { 
        super.displayinfo();
        console.log("Department :", this.department);
    }
    updateamount(val){
        super.total_amount(val);
    }
}

let a = new demo(1243, "Mukeem", 50000, "IT");
let b= new demo("xyz","rohit",60000,"ml");
a.show();
b.show();
a.updateamount(5000);
b.updateamount(10000);

a.show();
b.show();


/*4. E-Commerce Product System
Create a class Product with productId, productName, and price.
 Add an instance method getDiscountedPrice(discount) to calculate the final price.
Create a static method compareProducts(p1, p2) that accepts two Product objects and displays the product having the higher price.
 Create a derived class Electronics having an additional property warranty. 
 Override a suitable display method so that electronics-specific information is also displayed.
Concepts Covered: Objects as Arguments, Static Method, Instance Method, Inheritance, Overriding
 */
class Product {

    constructor(id, name, price) {
        this.product_id = id;
        this.product_name = name;
        this.product_price = price;
    }

    getDiscountedPrice(discount) {
        this.payable = this.product_price - discount;
        console.log("Total payable amount:", this.payable);
    }

    static compareProducts(p1, p2) {
        if (p1.product_price > p2.product_price) {
            console.log("Higher priced product:", p1.product_name);
        }
        else if (p2.product_price > p1.product_price) {
            console.log("Higher priced product:", p2.product_name);
        }
        else {
            console.log("Both products have equal prices");
        }
    }

    display() {
        console.log(this.product_id, this.product_name, this.product_price);
    }
}

class Electronics extends Product {

    constructor(id, name, price, warranty) {
        super(id, name, price);
        this.warranty = warranty;
    }

    display() {
        super.display();
        console.log("Warranty:", this.warranty, "years");
    }
}

let p1 = new Product(101, "Nike", 3200);
let p2 = new Product(102, "Adidas", 4500);

let e1 = new Electronics(103, "Laptop", 55000, 2);

p1.getDiscountedPrice(1200);

p1.display();

Product.compareProducts(p1, p2);

e1.display();


/* 5. Online Cab Booking System
Create a base class Vehicle having vehicleNo, driverName, and distance. 
Provide a method calculateFare() in the base class. Create two derived classes Car and Bike. 
Override calculateFare() such that a car charges Rs. 15 per km while a bike charges Rs. 8 per km.
Use constructors and super() appropriately. Also create a static method in Vehicle to display the common booking platform name.
Create objects of Car and Bike and calculate their fares for different distances.
  */

class Vehicle {
    constructor(vn, dn, dis) {
        this.vehicleNo = vn;
        this.driverName = dn;
        this.distance = dis;
    }

    calculateFare() {
        console.log("Fare calculation");
    }

    static platform() {
        console.log("Booking Platform: Ola");
    }
}

class Car extends Vehicle {
    constructor(vn, dn, dis) {
        super(vn, dn, dis);
    }

    calculateFare() {
        let fare = this.distance * 15;
        console.log("Car Fare:", fare);
    }
}

class Bike extends Vehicle {
    constructor(vn, dn, dis) {
        super(vn, dn, dis);
    }

    calculateFare() {
        let fare = this.distance * 8;
        console.log("Bike Fare:", fare);
    }
}

let c1 = new Car("C101", "Rahul", 10);
let b1 = new Bike("B101", "Aman", 15);

Vehicle.platform();

c1.calculateFare();
b1.calculateFare();


/* Hospital Management System
Create a base class Person with id, name, and age. Create a derived class Doctor containing
 specialization and consultationFee, and another derived class Patient containing disease and roomNo. 
 Use constructors and super() for initialization. Define displayDetails() in Person and override it in both Doctor 
 and Patient to display their specific information. Add a static member/method in Person to count and display 
 the total number of persons created in the system. Create at least two doctors and two patients and display their details.
Concepts Covered: Hierarchical Inheritance, Constructor, super(), Static Member, Instance Method, Method Overriding */

class Person {
    static count = 0;

    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
        Person.count++;
    }

    displayDetails() {
        console.log("ID :", this.id);
        console.log("Name :", this.name);
        console.log("Age :", this.age);
    }

    static displayCount() {
        console.log("Total Persons :", Person.count);
    }
}

class Doctor extends Person {
    constructor(id, name, age, specialization, consultationFee) {
        super(id, name, age);
        this.specialization = specialization;
        this.consultationFee = consultationFee;
    }

    displayDetails() {
        super.displayDetails();
        console.log("Specialization :", this.specialization);
        console.log("Consultation Fee :", this.consultationFee);
    }
}

class Patient extends Person {
    constructor(id, name, age, disease, roomNo) {
        super(id, name, age);
        this.disease = disease;
        this.roomNo = roomNo;
    }

    displayDetails() {
        super.displayDetails();
        console.log("Disease :", this.disease);
        console.log("Room No :", this.roomNo);
    }
}

let d1 = new Doctor(101, "Aman", 40, "Cardiologist", 1000);
let d2 = new Doctor(102, "Ravi", 45, "Neurologist", 1500);

let pp1 = new Patient(201, "Mukeem", 20, "Fever", 12);
let pp2 = new Patient(202, "Rahul", 25, "Malaria", 15);

console.log("Doctor 1:");
d1.displayDetails();

console.log("\nDoctor 2:");
d2.displayDetails();

console.log("\nPatient 1:");
pp1.displayDetails();

console.log("\nPatient 2:");
pp2.displayDetails();

Person.displayCount();




