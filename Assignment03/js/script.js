// 1 - THE "COIN FLIP" GAME REDUX
// let coinFlip = parseInt(prompt('How many times would you like to flip the coin? Enter a number between 1 and 10'));
// for (let i = 0; i < coinFlip; i++) {
//     // coinFlip = i;
//     let randomNum = Math.round(Math.random());
//     if (randomNum < 1) {
//         console.log('Heads');
//     } else {
//         console.log('Tails');
//     }
// }

// 2 - THE "COIN FLIP STREAK" GAME
// let coinFlip;
// let again = 0;
// do {
//     coinFlip = Math.round(Math.random());
//     if (coinFlip < 1) {
//         console.log('Heads');
//     } else {
//         console.log('Tails');
//     }
// } while (coinFlip === 0);

// 3 - LOOPING A TRIANGLE
// let pound;
// let hash = ['#', '##', '###', '####', '#####', '######', '#######'];
// for (pound in hash) {
//     console.log(hash[pound]);
// }

// 4 - ODD OR EVEN
// let oddNumbers = -1;
// let evenNumbers = -2;
// while (oddNumbers <= 13 && evenNumbers <= 13) {
//     oddNumbers = oddNumbers + 2;
//     evenNumbers = evenNumbers + 2;
//     console.log(evenNumbers + ' is even.');
//     console.log(oddNumbers + ' is odd.');
// }

// 5 - MARCO! POLO!
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 && i % 5) {
//         console.log(i);
//     } else if ((i % 3 == 0) && (i % 5 == 0)) {
//         console.log('Marco Polo!');
//     } else if (i % 3 == 0) {
//         console.log('Marco!');
//     } else if (i % 5 == 0) {
//         console.log('Polo!');
//     }
// }

// 6 - COUNTDOWN
// let i;
// let input = parseInt(prompt('Enter a number between 1 and 100 where the countdown will start.'));
// for (let i = input; i > 0; i--) {
//     console.log(i);
// }


// 7 - VALIDATE REPEAT ENTRY IN LAB 5(EXTRA CREDIT)
// let miles;
// let gallons;
// let mpg;
// let again = " ";

// do {
//     miles = parseFloat(prompt('Enter miles driven'));
//     gallons = parseFloat(prompt('Enter size of gas tank in gallons'));
//     if (!isNaN(miles) && miles > 0 && !isNaN(gallons) && gallons > 0) {
//         mpg = miles / gallons;
//         document.write('Miles per gallon: ' + parseInt(mpg, 10) + '<br>');
//     } else {
//         alert('One or both entries is invalid.');
//     }
//     again = prompt('Repeat entries - (y or n)');
//     if (again !== "y" && again !== "n") {
//         again = prompt('Repeat entries - (y or n)');
//     }            
// } while (again === "y");



// 8 - VALIDATE NUMERIC ENTRIES IN LAB 6 (EXTRA CREDIT)
// let futureValue;
// let investment;
// let rate;
// let years;
// let i;

// investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
// if (isNaN(investment)) {
//     alert('Entry must be numeric.');
//     investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
// } 

// rate = parseFloat(prompt('Enter interest rate xx.xxx'));
// switch (rate) {
//     case (isNaN(rate)):
//         alert('Entry must be numeric.');
//         rate = parseFloat(prompt('Enter interest rate xx.xxx'));
//     case (rate < 0):
//         alert('Entry must be between 0 and 6');
//         rate = parseFloat(prompt('Enter interest rate xx.xxx'));
//     case (rate > 6):
//         alert('Entry must be between 0 and 6');
//         rate = parseFloat(prompt('Enter interest rate xx.xxx'));
//     default:
//         break;
// }

// years = parseInt(prompt('Enter number of years'));
// if (isNaN(years) && years < 1 || years > 30) {
//     alert('Entry must be numeric and between 1 and 30.');
//     years = parseInt(prompt('Enter number of years'));
// }

// futureValue = investment;

// for (i = 1; i <= years; i++) {
//     futureValue = futureValue + (futureValue * rate / 100);
// }
// futureValue = parseInt(futureValue, 10);
// document.write('Investment amount: $' + investment + '<br>');
// document.write('Interest rate: %' + rate + '<br>');
// document.write('Years: ' + years + '<br>');
// document.write('Future value: $' + futureValue);

let futureValue;
let investment;
let rate;
let years;
let i;
futureValue = investment;

for (i = 1; i <= years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}