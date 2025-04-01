//setTimeout-async function
// function findsum(n){
//     let ans=0;
//     for(let i=1;i<=n;i++){
//         ans=ans+i;
//     }
//     return ans;
// }

// function findsumTill100(){
//     console.log(findsum(100));
// }

// setTimeout(findsumTill100,1000)  //setTimeout is a async function
// console.log("Hello world");




//fs.readFile-async function
// const fs=require("fs");

// fs.readFile("b.txt", "utf-8", function(err,data){
//     console.log(data);
// })

// console.log("hi there");
// let a=0;
// for(i=0;i<100000;i++){
//     a++;
// }
// console.log("hi there 2");


//asynchronous function using promises
const fs=require('fs');
//my own asynchronous function
function kiratReadFile(){
    console.log("inside kiratreadsfile");
    return new Promise(function(resolve){
        console.log("inside promises");
        fs.readFile("b.txt", "utf-8", function(err,data){
            console.log("before resolve");
            resolve(data);
        });
    })
}
//callback function to call
function OnDone(data){
    console.log(data)
}
kiratReadFile().then(OnDone);