let student={
     name: "Mukeem",
     roll: 8780021,
     sec:"C",
     course: "B.tech",

};
 
console.log(student.name);
// another method student[" key"]


const customer={
    Name: "Mukeem",
    contact:{
        mob: 6738219983,
        email: "m54esf@gmail.com"
    },
    address:{
        state:"U.P",
        city: "Baraut",
        pin: 250617,
        location:{
            lat:23.5,
            lng:77.2,
        },
    },
    product:{
        p_name:"shose",
        brand:"Nike",
        quantity: "2pair",
    },
};

let {brand,quantity}=customer.product;

//loop for

for(let key in customer){
    // only key will be print
    console.log(key,customer[key]);
}
Object.entries(student).forEach(function(val){
    console.log(val);
})













