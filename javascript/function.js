//FIRST
// function sum(a,b){
//     return a+b;
// }
// const value=sum(1,2);
// console.log(value)



//SECOND
//function can take other functions as input(callbacks)
// function sum(num1,num2,fnToCall){
//     let result=num1+num2;
//     fnToCall(result);
// }
// function displayresult(data){
//     console.log("Result of the sum is : " + data);
// }
// function displayresultpassive(data){
//     console.log("sum's result is : "+ data);
// }

// const ans=sum(1,2,displayresult);


//THIRD
//callback 
// function calculateArithmetic(a,b,arithmeticFinalFunction){
//     const ans=arithmeticFinalFunction(a,b);
//     return ans;
// }
// function sum(a,b){
//     return a+b;
// }
// function sub(a,b){
//     return a-b;
// }
// const value=calculateArithmetic(1,2,sub);
// console.log(value)


//FOURTH
// callback using setTimeout
// function greetAlien(){
//     console.log("hello Alien");
// }
// setTimeout(greetAlien,3*1000)



//FIFTH
//callback using setinterval
// function greetAlien(){
//     console.log("hello Alien");
// }
// setInterval(greetAlien,1*1000)
