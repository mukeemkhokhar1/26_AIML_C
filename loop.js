// 1.print numbers from 1to 10 using for loop
for(let i=1; i<=5;i++){
    console.log(i);
}

//print 10 to 1 usiing while loop
let x=7;
while(x>=1){
    console.log(x);
    x--;
}
// print even from 1 to 20
console.log("even (1 to 20)");
for(let i=1; i<=20;i++){
    if(i%2===0){
        console.log(i);
    }
    //or
    // for(let i=2; i<=20;i=i+2){    
     //  console.log(i);
     //   }

}
//odd 1to 15 using while
console.log("odd 1 to 15 using while loop");
 let j=1;
 while(j<=15){
    console.log(j);
    j=j+2;
 }
// table
 let n = Number(prompt("Enter the number you want a table for:"));

if (isNaN(n)) {
  console.log("Please enter a valid number.");

} else {
  for (let i = 1; i <= 10; i++) {
    console.log(i,"*",n,"==",i*n);
  }
}
// sum of n number
let sum=0;
let a=Number(prompt("enter the you want sum: "));
if(isNaN(a)){
    console.log("please enter the valid number :");
}else{
    for(let i=1; i<=a; i++){
        sum = sum +i;
    }
    console.log("total sum till :",a,"is ==",sum);
}

// cheak how much number is odd or sum between 1to n;
let b=Number(prompt("enter the number you want count odd and even: "));
let todd=0;
let teven=0;
let start=1;
if(isNaN(b)){
    console.log("please enter the valid number :");
}else{
    while(start<=b){
        if(start%2===0) teven++;
        else todd++;

         start++;

    }
    console.log("total odd number from 1 to ",b,"==",todd);
    console.log("total even number from 1 to ",b,"==",teven);
}









