// var,let const-
// let a;           //delcare
// let b="MUKEEM";    //declarations  and initialization
// var c="khokhar";

// const pi=3.14;
// console.log(b+" "+c);

// data type: 
/* 1. primitives data type->  str, num,bool,NULL,undefined,symbol, bigint
   2. non primitives/refrence data type-> array[],object{}, fun(), 
   */

// operators {arithmetic ,comparision, logical,assignment, unary}
 // 1. + - / * %  **
//=,==,===,!=,!==, >,< ,<=,<=
 // && , ||
//   let x=3;
//   let y=8;
//    console.log(x+y);
// console.log(x-y);
// console.log(x*y);
// console.log(x/y);
// console.log(x%y);   //modulo
// console.log(x**y);  // x pow y
// console.log("the human");

function info(){
   let age=parseInt(prompt("enter your age :"));
   if(age>=18){
      alert("you are eligible for vote");
   }else{
      alert("you are not eligible for vote");
   }
}
 
info();
