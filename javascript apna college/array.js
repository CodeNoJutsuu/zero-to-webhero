// let marks=[97,82,75,64,36];
// console.log(marks);
// console.log(marks.length);
// marks[2]=56;
// console.log(marks[2]);

//loop inside array


// let heroes=["ironman","thor","hulk","shaktiman","spiderman"];

// for(let i=0;i<heroes.length;i++){
//     console.log(heroes[i]);
// }


// let cities=["delhi","mumbai","pune","punjab","gurgaon"];

// for(let city of cities){
//     console.log(city.toUpperCase());
// }



// for a given array with marks of students ->[85,97,44,37,76,60] find the average marks of the entire class

// let marks=[85,97,44,37,76,60];
// let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum=sum+marks[i];
// }
// let avg=sum/marks.length;
// console.log(`avg marks of the class = ${avg}`);


//for a given array with price of 5 items ->[250,645,300,900.50] All items have an offer of 10% off on them.change the array to store final price after applying offer

let item=[250,645,300,900,50];
for(let i=0;i<item.length;i++){
    let offer=item[i]/10;
    item[i]=item[i]-offer;
}
console.log(item);