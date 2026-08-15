/* 
1.function abcd(parameter){
    code
}  



2. let fnc= function(parameter){
    it called store function into fnc
}


3. let abcd= (parameter)=>{
      called fat arrow function.
    }

    //function call
    abcd(arguments)



    rest in function ... val
*/
// function abcd(...val){
//     console.log(val);
//     //no need to give saprate parameter.
// }
// abcd(3,6,9,12,15,18,21,24,27,30);

    // discounter function 
  function discountcar(discount){
    return function(price){
        let rq=price- price*(discount/100); //rq mein riqure pay amount
        let dis=price*(discount/100);
        console.log("Congratulation! you have received an Rs.",dis);
        console.log("Your payable amount is ₹",rq);
    }
  }
    // discount how much you want
    let discount =Number(prompt("enter how much discount you want"));
    let price = Number(prompt("enter price on which you want discount :"));
   
    let d= discountcar(discount);
    d(price);
    















