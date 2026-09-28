//oops

class student{
    static name="Mukeem1";

constructor(nm){
        this.name=nm;
        console.log("default constructor called :")
        console.log(this.name);
    }


    info(){
        console.log("student information: ");
        console.log(this.name);
    }
    static display(){
        console.log(name);
    }

}

let s1= new student();
let s2= new student("Mukeem ")
s2.info();
student.display();





class employee {
    constructor(name,department){
        this.Name=name;
        this.depart=department;
        console.log("parametric constructor is called :",this.Name);
        console.log("parametric constructor is called: ",this.depart);
    }
}

let e1=new employee("john","IT");












