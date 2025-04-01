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


//sixth(function inside function)

// function square(n){
//     return n*n;
// }

// function cube(n){
//     return n*n*n;
// }


// function sumofsquares(a,b){
//     const val1=square(a);
//     const val2=square(b);

//     return val1+val2;
// }

// function sumofcube(a,b){
//     const val1=cube(a);
//     const val2=cube(b);

//     return val1+val2;
// }

// console.log(sumofcube(1,2));


//upper code using callback function
function square(a){
    return a*a;
}
function cube(a){
    return a*a*a;
}
function sumofSomething(a,b,fn){
    const val1=fn(a);
    const val2=fn(b);

    return val1+val2;
}

const value=sumofSomething(1,2,cube);
console.log(value);
