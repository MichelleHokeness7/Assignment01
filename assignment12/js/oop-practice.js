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
//         this._type = type;
//         this._breed = breed;
//         this._color = color;
//         this._height = height;
//         this._length = length;
//         // console.log(`The new animal is a ${type} known as the ${breed}, that is ${color} and stands at a height of ${height}, and its length is ${length}.`)
//     }  
// }
// const animal1 = new Animal('bird', 'Potoo', 'brown','60cm tall', '19 - 24 in' );

// STEP 6
// for (let data in animal1) {
//     console.log(animal1)
// }
// STEP 7
// class Animal {
//     constructor(type, breed, color, height, length) {
//         this._type = type;
//         this._breed = breed;
//         this._color = color;
//         this._height = height;
//         this._length = length;
//         this.speak = function() {
//             if (this._type === 'cat') {
//                 console.log(`The ${color} ${type} is meowing!`)
//             } else {
//                 console.log(`The ${color} ${type} is barking!`)
//             }
//         }
        
//     }
    
// }
// const animal1 = new Animal('cat', 'Manx', 'Black','12 in tall', '14 - 16 in' );
// animal1.speak();
// STEP 8
// class Animal {
//     constructor(type, breed, color, height, length) {
//         let _type = type;
//         let _breed = breed;
//         let _color = color;
//         let _height = height;
//         let _length = length;
//         let checkType = function() {
//             if (_type === 'cat') {
//                 console.log(`${type}`)
//                 console.log(`The ${type} has made a noise!`)
//             } else {
//                 console.log(`${type}`)
//                 console.log(`The ${type} has made a noise!`)
//             }
//         }
//         this.speak = function() {
//             checkType();
//         }
        
//     }
    
// }
// const animal1 = new Animal('cat', 'Manx', 'Black','12 in tall', '14 - 16 in' );
// animal1.speak();
// STEP 9