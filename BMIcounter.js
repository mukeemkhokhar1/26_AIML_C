
function bmi(){
    let height= Number(prompt("enter your height in meter :"));
    let weight= Number(prompt("enter your weight in kg :"));
    let BMI=weight/(height*height);
     if(BMI<18.5) return "underweight ";
     else if (BMI>=18.5 && BMI <=24.9) return "NORMAL ";
     else if (BMI>=25 && BMI <=29.9) return "OVER WEIGHT ";
     else if (BMI>=30 && BMI <=34.9) return "OBESITY (CLASS 1)";
     else return "SEVERE ";
}

console.log(bmi());