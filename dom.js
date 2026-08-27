let b=document.querySelector("h1");
console.dir(b);//console.log(b);
//


// remove
 let h1=document.querySelector("h1");
 h1.remove();

// add element at last
let a= document.createElement("h2");  // here h2 is tag element will add in tag h2
a.textContent="element is created by js using document.Element at end";
let c=document.querySelector("div");
  c.append(a);  //document.querySelector("div").append(a);

  // add element at start
  let e= document.createElement("h1");  // here h2 is tag element will add in tag h2
e.textContent="element is created by js using document.Element at start";
  document.querySelector("div").prepend(e);

//style by js

let h2=document.querySelector("h2");
h2.style.color="red";
h2.style.fontFamily="Italic";







