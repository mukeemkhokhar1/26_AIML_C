let first="Mukeem";
let last="Khokhar";
console.log(`"My name is" ${first} ${last}`);




function fullName(f,l){
  return `${f}  ${l}`;
};

let nm=`hello ${fullName("Mukeem","Khokhar")}`;

console.log(nm);



//arrow function   ()=>{
    //                  body   }

let Fullname = (f, l) => {
  return ` hey ${f} ${l}`;
};

console.log("arrow_function used :",Fullname("mukeem", "khokhar"));

//   rest operator (...val)

function sum(f,l,...val){
    let total=0;
    for(let n of val){
        total=total+n;
    }
console.log(`"rest_operator used:  ",${total}  ${f} ${l}`);

}

sum("Mukeem","khokhar",10,20,30,40,50,60);








//spread operator

function product(...val) {
  let prod = 1;   // start with 1
  for (let i of val) {
    prod = prod * i;
  }
  console.log("used spread operator", prod);
}

let a = [];
for (let i = 0; i <= 5; i++) {
  a.push(parseInt(prompt("enter value ")));
}

product(...a);



// concatination of two or more array

let x=[10,20,30,40];
let y=["mukeem","khokhar",4738];

let z=[...y,...x];
console.log("used concatination of two or more array ",...z);


//object literals

let nm1="name";

let student={
  ["first"+ nm1]:"Mukeem",
  ["last"+ nm1]: "khokhar"
}

console.log(student.firstname);


let n1="Mukeem1";
let n2="Khokhar2";

let s1={
  n1,
  n2,
  display(){
    console.log(this.n1,this.n2);
  }
}

student.display();

//array destructuring
let e1=["Mukeem",6473,"C","75489365748"];
let[name12,roll,sec,mob]=e1;


console.log(name12);
console.log(roll);
console.log(sec);
console.log(mob);