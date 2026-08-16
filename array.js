let arr=[10,20,30,40];
// let arr= new array();
console.log(arr);
//array method:

arr.push("MUKEEM ");   //new arr= [10,20,30,40,"MUKEEM"]
console.log(arr);


arr.push("KHOKHAR")    //now arr=[10,20,30,40,"MUKEEM ","KHOKKHAR"]
console.log(arr);


arr.pop();    //  update arr=[10,20,30,40,"MUKEEM KHOKKHAR"]
console.log(arr);


arr.shift();   //remove 0 index value             // [20,30,40,"MUKEEM KHOKKHAR"]
 console.log(arr);



arr.unshift(90);  // add at 0 index [90,20,30,40,"MUKEEM KHOKKHAR"]
console.log(arr);



let arr1=[1,2,3,4,5,6,7,8,9,10];
console.log(arr1);
arr1.splice(3,2);     //.splice(start,how much element have to delete)


arr.splice(3,2,"ben","stokes")   // 3rd  index two value pop and ben stokes add
console.log(arr1);


let sliced=arr1.slice(1,6);
console.log("sliced element:",sliced);

// reverse changed orignal array
arr1.reverse();
console.log(`reversed array is ${arr1}`);

//sorting in array
let x=[30,10,50,20,40,70,1,0,48];
console.log(x);   // here also will be sorted result
 x.sort(function(a,b){   //note changed orignal arr
    return a-b; //if want ascending order
    //return b-a // if want descending order
})

 console.log(x);

/*MAP when we make new arr crosponding a old array's element it will take same size of old array*/


let nm=[10,20,30,40];
let ms = nm.map(function(val){ // can be added more parmeter like loop condition etc 
    return val*val;   // [100,400,900,400]
})
console.log(nm," map--> ",ms)
//filter  when we make array want some element crosponding old array

let nf=[3,6,9,12,15,18,21,24,27,30];
let wf=nf.filter(function(val){
    if(val%6===0) return true;
})
 console.log(nf,"filter--->",wf);

//reduce when we complete array into a single value

let arr3=[2,4,10,43,5];
let ans=arr3.reduce(function(accumulator, val){
    return accumulator*val;   // 1 is initial value of accumulator and it save updated value;
},1);

console.log("after using reduse-->",ans);


//spread operator ... for copying
let arr4=[10,2,4,6,7,8];
let arr5=arr4;    // not copy it take reffrence can be changed orignal val

let arr6=[...arr4];      // it take copy not affect orignal value





