// LARGER OR SMALLER?
// let applesToday = window.prompt("How many apples would you like today?");
// let applesTomorrow = window.prompt("How many apples would you like tomorrow?");

// if (applesToday > applesTomorrow) {
//     window.document.write("You chose " + applesToday + " apples today over " + applesTomorrow + " apples tomorrow.");
// } else if (applesToday < applesTomorrow) {
//     window.document.write("You chose " + applesTomorrow + " apples tomorrow over " + applesToday + " apples today.");
// }

// THE WORD TRANSLATOR
// let languageCode = window.prompt('Enter language code of choice: es, de, en, or fr');
// if (languageCode === "es") {
//     window.console.log('Hello World translated in Spanish is: Hola Mundo');
// } else if (languageCode === "de") {
//     window.console.log('Hello World translated in German is: Hallo Welt');
// } else if (languageCode === "en") {
//     window.console.log('Hello World translated in English is: Hello World');
// } else if (languageCode === "fr") {
//     window.console.log('Hello World translated in French is: Bonjour le monde');
// }else {
//     window.console.log('Hello World translated in English is: Hello World');
// }

// THE "COIN FLIP" GAME
// let randomNum = Math.round(Math.random() * 10);
// let coinFlip = randomNum;

// let choice = window.prompt('Enter heads or tails').toLowerCase();
// if (coinFlip <= 5) {
//     if (coinFlip <= 5 && choice === "heads") {
//         alert('The flip was heads and you chose heads... you win!');
//     } else if (coinFlip <= 5 && choice === "tails") {
//         alert('The flip was heads but you chose tails... you lose!');
//     }
// } else if (coinFlip > 5) {
//     if (coinFlip > 5 && choice === "heads") {
//         alert('The flip was tails but you chose heads... you lose!');
//     } else if (coinFlip > 5 && choice === "tails") {
//         alert('The flip was tails and you chose tails... you win!');
//     }
// }

// console.log(randomNum);

// THE "GRADE ASSIGNER" APPLICATION
// let userInput = parseInt(window.prompt("Enter a number between 1 and 100"));

// if ((isNaN(userInput) || (userInput < 1 || userInput > 100))) {
//     window.document.write('Please enter a valid number. Only numbers between 1 and 100 are accepted.<br>Hit refresh and try it again.');
// }
//     if (userInput >= 60 && userInput <= 69) {
//         window.console.log('You received a D');
//     } else if (userInput >= 70 && userInput <= 79) {
//         window.console.log('You received a C');
//     } else if (userInput >= 80 && userInput <= 89) {
//         window.console.log('You received a B');
//     } else if (userInput >= 90 && userInput <= 100) {
//         window.console.log('You received an A');
//     } else  if  (userInput < 60) {
//         window.console.log('You received an F');
//     } 

// THE "HITCHHIKER'S GUIDE TO THE GALAXY" GAME
let userResponse = window.prompt('Hello friend. Are you ready to play this game, yes/no?').toLowerCase();
if (userResponse === "yes") {
    alert('You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall.');

let userDirection = window.prompt('Which direction would you like to head to (please enter forward, left, or right)?');
switch (userDirection) {
    case "left":
        alert('Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown!');
        break;
    case "forward":
        alert('You walk 100 yards and safely make your way out of the cave.');
        break;
    case "right":
        alert('You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever!');
        break;
    default:
        alert('The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option.');
}
let userRating = parseInt(window.prompt('Please rate this game using a scale that is between 1 and 10'));
if (userRating < 1 || userRating > 10) {
    alert('Thank you for playing the game.');
} else if (userRating >= 6 && userRating <= 10) {
    alert('Thank you for playing. Want to play again? if so, hit refresh.');
} else if (userRating >= 1 && userRating <= 5) {
    alert('Thank you for playing. I am working hard to improve the game.');
}

} else if (userResponse === 'no' || userResponse !== 'yes') {
    alert('Thank you and please come back to play another time.');
}
