function student(id,name,city){
    this.id=id;
    this.name=name;
    this.city=city;
}

let st1=new student("250b3215310113","Mukeem","baraut");
let st2=new student("250b3215310118","Mukeem khokhar","baghpat");

Object.entries(st1).forEach(function(val) {
    console.dir(val);
});

for (let key in st2) {
    console.log(key, st2[key]);
}