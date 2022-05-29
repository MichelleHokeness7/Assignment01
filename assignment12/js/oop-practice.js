// STEP 1
// class Cat {
//     constructor() {
        
//     }
// }

// const Dog = function() {
    
// }
// STEP 2
// const cat1 = new Cat();
// const dog1 = new Dog();
// STEP 3
// class Animal {
//     constructor() {
//         console.log('The Animal has been created.')
//     }
// }
// const animal1 = new Animal();
// STEP 4
// class Animal {
//     constructor(name, type) {
//         console.log(`${name}, the ${type}.`)
//     }
// }
// const animal1 = new Animal('Flash', 'turtle');
// STEP 5
// class Animal {
//     constructor(type, breed, color, height, length) {
//         console.log(`The new animal is a ${type} known as the ${breed}, that is ${color} and stands at a height of ${height}, and its length is ${length}.`)
//     }

// }
// const animal1 = new Animal('bird', 'Potoo', 'brown','60cm tall', '19 - 24 in' );

// STEP 6
// let txt = '';
// for (let data in Animal) {
//     txt += Animal[x] + " ";
//     console.log(animal1)
// }
// STEP 7
class Animal {
    constructor(type, breed, color, height, length) {
        console.log(`The new animal is a ${type} known as the ${breed}, that is ${color} and stands at a height of ${height}, and its length is ${length}.`)
    }
    speak = () => {
        if (animal1.type === 'bird') {
            console.log(`The brown bird is chirping!`) 
        } else if (animal1.type === 'dog') {
            console.log(`The white dog is barking!`) 
        }
    }
}
const animal1 = new Animal('bird', 'Potoo', 'brown','60cm tall', '19 - 24 in' );
animal1.speak();
// STEP 8

// STEP 9