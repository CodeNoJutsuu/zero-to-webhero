// function myFunction(){
//     console.log("welcome to lpu");
//     console.log("we are learning js");
// }
// myFunction();

// passing parameter
// function passingparameter(msg){
//     console.log(msg);
// }
// passingparameter("i love js");


//sum
// function sum(a,b){
//    s=a+b;
//    return s;
// }
// let value=sum(1,2);
// console.log(value);


//arrow function
// const arrowSum=(a,b)=>{
//     console.log(a+b);
// }
// arrowSum(3,4);

// const multiply=(a,b)=>{
//     return a*b;
// }
// console.log(multiply(3,4));

//question
//create a function using the "function" keyword that takes a string as an argument and returns the number of vowels in the string 

// function countvowel(str){
//     let count=0;
//     for(const char of str){
//         if(
//             char=="a"||char=="e"||char=="i"||char=="o"||char=="u"
//         )
//         count++;
//     }
//     console.log(count);
// }

// countvowel("hello");

//using arrow function


// const countvowel=(str)=>{
//     let count=0;
//     for(const char of str){
//         if(
//             char=="a"||char=="e"||char=="i"||char=="o"||char=="u"
//         )
//         count++;
//     }
//     console.log(count);
// }

// countvowel("hello");

//for each
//when we bind a function to something then it will become method 
//like for each binded with array
//A callback is a function passed as an argument to another function

// let arr=["pune","delhi","mumbai"];
// arr.forEach((val,index,arr)=>{
//     console.log(val,index,arr);
// });


//question
//for a given array of numbers,print the square of each value using the for each loop

// let numbers=[2,3,4,5,6];

// numbers.forEach((val)=>{
//      console.log(val*val);
// });

