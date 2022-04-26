//STEP 1
// let movies = ['The Pelican Brief', 'Clash of the Titans \'81', 'French Kiss', 'Legend 1985', 'Resident Evil'];
// console.log(movies[1]);

//STEP 2
// let movies = new Array(5);
// movies[0] = 'The Pelican Brief';
// movies[1] = 'Clash of the Titans \'81';
// movies[2] = 'French Kiss';
// movies[3] = 'Legend 1985';
// movies[4] = 'Resident Evil';
// console.log(movies[0]);

//STEP 3
// let movies = new Array([]);
// movies[0] = 'The Pelican Brief';
// movies[1] = 'Clash of the Titans \'81';
// movies[2] = 'French Kiss';
// movies[3] = 'Legend 1985';
// movies[4] = 'Resident Evil'; 

// movies.splice(2,0, 'The Professional');
// console.log(movies.length);
//STEP 4
// let movies = ['The Pelican Brief', 'Clash of the Titans \'81', 'French Kiss', 'Legend 1985', 'Resident Evil'];
// delete movies[0];
// console.log(movies);

//STEP 5
// let movies = ['The Pelican Brief', 'The Professional', 'Clash of the Titans \'81', 'French Kiss', 'Legend 1985', 'Resident Evil', 'Die Hards'];
// for (let title in movies) {
//     console.log(movies[title]);
// };

//STEP 6
// let movies = ['The Pelican Brief', 'The Professional', 'Clash of the Titans \'81', 'French Kiss', 'Legend 1985', 'Resident Evil', 'Die Hards'];
// for (let i of movies) {
//     console.log(i);
// };

//STEP 7
// let movies = ['The Pelican Brief', 'The Professional', 'Clash of the Titans \'81', 'French Kiss', 'Legend 1985', 'Resident Evil', 'Die Hards'];
// movies.sort();
// for (let i of movies) {
//     console.log(i);
// };

//STEP 8
// let movies = ['The Pelican Brief', 'The Professional', 'Clash of the Titans \'81', 'French Kiss', 'Legend 1985', 'Resident Evil', 'Die Hards'];
// let leastFavMovies = ['Torque', 'Pokemon', 'Child\'s Play'];
// console.log(`Movies I like:\n\n${movies[0]}\n${movies[1]}\n${movies[2]}\n${movies[3]}\n${movies[4]}\n\n...\n\nMovies I regret watching:\n\n${leastFavMovies[0]}\n${leastFavMovies[1]}\n${leastFavMovies[2]}\n\n`);
//STEP 9
// let movies = ['The Pelican Brief', 'The Professional', 'Clash of the Titans \'81', 'French Kiss', 'Legend 1985', 'Resident Evil', 'Die Hards'];
// movies = movies.concat('Torque', 'Pokemon', 'Child\'s Play');
// movies.sort().reverse();
// console.log(movies);

//STEP 10
// let movies = ['The Pelican Brief', 'The Professional', 'Clash of the Titans \'81', 'French Kiss', 'Legend 1985', 'Resident Evil', 'Die Hards'];
// movies = movies.concat('Torque', 'Pokemon', 'Child\'s Play');
// movies.sort().reverse();
// movies = movies.pop()
// console.log(movies);

//STEP 11
// let movies = ['The Pelican Brief', 'The Professional', 'Clash of the Titans \'81', 'French Kiss', 'Legend 1985', 'Resident Evil', 'Die Hards'];
// movies = movies.concat('Torque', 'Pokemon', 'Child\'s Play');
// movies.sort().reverse();
// movies = movies.shift()
// console.log(movies);

//STEP 12
// let movies = ['The Pelican Brief', 'The Professional', 'Clash of the Titans \'81', 'French Kiss', 'Legend 1985', 'Resident Evil', 'Die Hards'];
// movies = movies.concat('Torque', 'Pokemon', 'Child\'s Play');
// console.log(movies);
// console.log(movies.indexOf('Torque'));
// console.log(movies.indexOf('Pokemon'));
// console.log(movies.indexOf('Child\'s Play'));
// movies.splice(7,8,9, 'Tropic Thunder', 'Sixteen Candles', 'The Old Guard');
// console.log(movies);

//STEP 13
// let movies = ['The Pelican Brief',1, 'Clash of the Titans \'81',2, 'French Kiss',3, 'Legend 1985',4, 'Resident Evil',5];
// let movie = movies.filter((item) => {
//     return typeof item === 'string';
// });
// console.log(movie);   

// let movies = [['The Pelican Brief',1], ['Clash of the Titans \'81',2], ['French Kiss',3], ['Legend 1985',4], ['Resident Evil',5]];
// movies.map((item) => {
//     let movieTitles = movies.filter((item) => {
//         return typeof item !== 'number'
//     })
//     console.log(movieTitles);
// })


//STEP 14
// let employees = ['Christian', 'Marcus', 'Faith', 'Ana'];
// let showEmployee = function () {
//     console.log('Employees:\n\n');
//     employees.forEach((employees) => {
//         console.log(`${employees}`);
//     });   
// }
// showEmployee();

//STEP 15
// let randomArr = [58, '', 'abcd', true, null, false, 0];
// let results = randomArr.filter((value) => {
//     if (value !== '' || value !== null || value !== 0 || value !== false) {
//         return value;
//     }
// })
// console.log(results([58, '', 'abcd', true, null, false, 0]));
//STEP 16
// let nums = [1, 3, 5, 7, 9, 11, 13, 15, 7, 19];
// let numsFunction = nums.find((value) => {
//     return value > 5;
// });
// console.log(numsFunction);
//STEP 17
let nums = [1, 3, 5, 7, 9, 11, 13, 15, 7, 19];
let largestNum = nums.find((value) => {
    return value > 15;
});
console.log(largestNum);