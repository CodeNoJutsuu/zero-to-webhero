// 1. Create a Counter in JavaScript (Counts Down from 30 to 0)

// let count = 30;

// function greetAlien() {
//     console.log(count);
//     count--;
//     if (count < 0) {
//         clearInterval(interval);
//     }
// }

// const interval = setInterval(greetAlien, 1000);


// Calculate the time it takes between a setTimeout call and the inner function actually running.

// function greetAlien() {
//     let endTime = Date.now(); // Capture the time when the function actually runs
//     console.log("Hello Alien");
//     console.log(`Actual delay: ${(endTime - startTime) / 1000} seconds`);
// }

// let startTime = Date.now(); // Capture the time when setTimeout was called
// setTimeout(greetAlien, 3000);



// Create a terminal clock that displays time in HH:MM:SS format.
// function displayClock() {
//     const now = new Date();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');
//     const seconds = String(now.getSeconds()).padStart(2, '0');

//     process.stdout.write(`\r${hours}:${minutes}:${seconds} `); // Overwrites the same line
// }

// setInterval(displayClock, 1000);









