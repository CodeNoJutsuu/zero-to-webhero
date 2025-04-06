//we are given an array of marks of student.filter out of the marks of student that scored 90+
// let marks=[89,93,89,96,94];
// let studmarks=marks.filter((val)=>{
//     return val>90;
// });
// console.log(studmarks);

//take a number n as input from user.create an array of numbers from 1 to n
let n=prompt("enter a number :");

let arr=[];
for(let i=1;i<=n;i++){
    arr[i-1]=i;
}
console.log(arr);


//use the reduce method to calculate sum of all numbers in an array
const output=arr.reduce((res,curr)=>{
    return res+curr;
});
console.log(output);


const output1=arr.reduce((res,curr)=>{
    return res*curr;
});
console.log(output1);



