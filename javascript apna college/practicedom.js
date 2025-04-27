// let h2=document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText=h2.innerText+"from Apna college students"; //concatenation
// console.dir(h2.innerText);

let divs=document.querySelectorAll(".box");
// console.dir(divs);
// console.log(divs[0]);

let idx=1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++
}




