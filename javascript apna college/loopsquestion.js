//print even between 1 to 100
// for(let i=0;i<=100;i++){
//     if(i%2===0){
//         console.log(i);
//     }
// }


// create a game where you start with any random game Number.Ask the user to keep guessing the game number until the users enters correct value

let i=2;
let usernum=prompt("Guess the number");

while(usernum!=i){
    usernum=prompt("you entered the wrong number.Guess again");
}
console.log("congratulations,you entered the right number");