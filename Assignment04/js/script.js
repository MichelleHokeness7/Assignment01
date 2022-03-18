// 1. PRACTICE WITH FUNCTIONS
// 1.1
// function halfNumber(x = 8) {
//     x /= 2;
//     console.log(`Half of 8 is ${x}.`);
// }
// halfNumber();

// 1.2
// function squareNumber(num) {
//     console.log('The result of squaring the number 12 is ' + num * num + '.');
// }
// squareNumber(12);

// 1.3
// let percentage = function percentOf(num1, num2) {
//     return (num1 / num2) * 100;
// }
// console.log('4 is ' + percentage(4, 8) + '% of 8.');

// 1.4
// let sum = function findModulus(num1, num2) {
//     return (num1 % num2);
// }
// console.log(sum(20, 7 ) + ' is the modulus of 20 and 7.');

// 1.5
// let numbers;

// function nums(num1, num2, num3) {
//     numbers = Number(prompt('Enter your 3 lucky numbers.'));
//     for (let i = 0; i <= 3; numbers++) {
//         alert('Enter the next number.');
//         return;
//     }
// }
// nums();
// console.log(num1 + num2 + num3);

// function certainAmountNums (num1, num2, num3) {
//     let base = 0;
//     prompt('Enter your 3 lucky numbers');
//     for (let i = 0; i < arguments.length; i++) {
//         base += Number(arguments[i]);
//     }
//     console.log(base);
// }
// certainAmountNums();




// 2. THE ROCK, PAPER, SCISSORS GAME
function displayTitle() {
    alert('Welcome! let\'s play rock, paper, scissors.');
}

function match(userChoice, computerChoice) {
    if (userChoice === 'r') {
        if (computerChoice === 's') {
            return ('You win!');
        }
    } else if (userChoice === computerChoice) {
        return ('It\'s a tie!');
    } else {
        return ('You lose this round.');
    }
}

// function add(x, y) {
//     return x + y
// }
// const add2 = (x, y) => {
//     return x + y

//     let neverHit = 2
// }

function playGame() {
    // let result = add(2, 2)
    // let variableFunction = add
    // let four = variableFunction(2, 2)
    // console.log(four) // 4

    console.log('result', result)
    let computerChoice = Math.round(Math.random() * 2); // * 2 gives a random number 0, 1, 2
    // console.log(computerChoice);
    let choice = prompt('Enter r for rock, p for paper, s for scissors.');
    alert('Here we go!');
    if (computerChoice === 0) {
            computerChoice = 'r';
    } else if (computerChoice === 1) {
            computerChoice = 'p';
    } else if (computerChoice === 2) {
            computerChoice = 's';
    } else {
            alert('Please enter r, p, or s');
    }

    let choice1 = choice;
    let choice2 = computerChoice;

    while (playAgain === 'y') {
    }
}

function main() {
    displayTitle();
    let playAgain = 'y';
    while (playAgain === 'y') {
        playGame();
        playAgain = prompt('Do you want to play again? y/n');
    }
    alert('Thank you for playing the game.');
}
main();
// playGame();



// 2. THE ROCK, PAPER, SCISSORS GAME - take 2
// let compChoice = Math.round(Math.random() * 2);
// let choice0 = 'r';
// let choice1 = 'p';
// let choice2 = 's';
// let playAgain = 'y';
// let userChoice;

// function userPlays() {
//     alert('Welcome to the rock, paper, scissors game.');
//     // console.log(`You chose ${arguments[i]}`);
//     while (true) {
//         userChoice = String(prompt('Enter r, p, or s'));
//         if (compChoice === 0) {
//             compChoice = 'r';
//         } else if (compChoice === 1) {
//             compChoice = 'p';
//         } else if (compChoice === 2) {
//             compChoice = 's';
//         }
//         return;
//     }
// }

// function computerPlays() {
//     while (true) {
//         if (userChoice == 'r' && compChoice == 'r') {
//             alert('You chose r and I chose r, it\'s a tie!');
//         } else if (userChoice == 'r' && compChoice == 's') {
//             alert('You chose r and I chose s, rock destroys scissors! You win!');
//         } else if (userChoice == 's' && compChoice == 'p') {
//             alert('You chose s and I chose p, scissors cut paper. You win!');
//         } else if (userChoice == 'p' && compChoice == 'r'){
//             alert('You chose p and I chose r, paper covers rock. You win!');
//         }
//         return;
//     }
//     while (true) {
//         if (userChoice == 'r' && compChoice == 'r') {
//             alert('You chose r and I chose r, it\'s a tie!');
//         } else if (userChoice == 'r' && compChoice == 's') {
//             alert('You chose r and I chose s, rock destroys scissors! You win!');
//         } else if (userChoice == 's' && compChoice == 'p') {
//             alert('You chose s and I chose p, scissors cut paper. You win!');
//         } else if (userChoice == 'p' && compChoice == 'r'){
//             alert('You chose p and I chose r, paper covers rock. You win!');
//         }
//         return;
//     }

// }

// function main() {
//     userPlays();
//     // let playAgain = 'y';
//     while (playAgain === 'y') {
//         computerPlays();
//         playAgain = prompt('Do you want to play again? y/n');
//     }
//     alert('Thank you for playing.');
// }
// main();

// 3. THE BASIC CALCULATOR
// alert('What calculations would you like to do?');
// function calc(numbers) {
//     let base = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         base += Number(arguments[i]);
//     }
//     return base;
// }
// console.log(calc(4, 20, 100,));

// import * as calculate from './modules/calculate.js';
// console.log(calculate.add(10, 10));
// console.log(calculate.sub(10, 10));
// console.log(calculate.mult(10, 10));
// console.log(calculate.divide(10, 10));
































