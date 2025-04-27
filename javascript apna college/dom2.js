// let div=document.querySelector("div");
// console.log(div);

// let id=div.getAttribute("id");
// console.log(id);

// let para=document.querySelector("p");
// console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class","newClass"))

//style
// let div=document.querySelector("div");
// console.log(div);
// console.log(div.style);
// div.style.backgroundColor="green";
// div.style.backgroundColor="purple";
// div.style.fontSize="26px";
// div.innerText="Hello!";

//insert elements
// let newbtn=document.createElement("button");
// newbtn.innerText="clickme!";
// console.log(newbtn);

// let div = document.querySelector("div");
// div.append(newbtn);
// div.prepend(newbtn);
// div.before(newbtn);
// div.after(newbtn);

// let p = document.querySelector("p");
// p.after(newbtn);

let newheading=document.createElement("h1");
newheading.innerHTML="<i>Hi,I am new!</i>"

document.querySelector("body").prepend(newheading);

let para=document.querySelector("p");
para.remove();


