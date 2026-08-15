// if else  else if
// switch case & break
//early pattern case

function grade(value){
    if(value>=90) return 'A+';
    else if (value>=80 && value<90) return 'A';
    else if (value>=70 && value<80) return 'B';
    else if (value>=60 && value<70) return 'C';
    else if (value>=33 && value<60) return 'D';
    else if (value>=0 && value<33) return 'Fail';
    else return "invalid marks";
}

console.log(grade(98));


let x=5;
switch (x){
    case 1:
        console.log("one");
        break;
     case 2:
        console.log("two");
        break;
    
     case 3:
        console.log("three");
        break;
     case 4:
        console.log("four");
        break;
     case 5:
        console.log("five");
        break;
     default :
         console.log("run default case :");   

}



