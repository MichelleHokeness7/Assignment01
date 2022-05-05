//STEP 1

// function daysInMonth(year, month) {
//     return new Date(year, month, 0).getDate();
//   }
  
//   let d = new Date();
//   let currentYear = d.getFullYear();
//   let currentMonth = d.getMonth() + 1; 
  
//   let daysThisMonth = daysInMonth(currentYear, currentMonth);
//   console.log(daysThisMonth);

//STEP 2
// let d = new Date();
// console.log(d.toDateString());

//STEP 3
// let testIfWeekend = function(day1){
//     let d = new Date(day1);
//     if (d.getDate() === 0 || d.getDate() === 6) {
//         return "It's the weekend!"
//     }
    
//     console.log(d.getDay());
// }
// console.log(testIfWeekend('Nov 15, 2014'));
// console.log(testIfWeekend('Nov 16, 2014'));
// console.log(testIfWeekend('Nov 17, 2014'));
// console.log('------------');
// console.log('0 = Sunday\n1 = Monday\n2 = Tuesday\n3 = Wednesday\n4 = Thursday\n5 = Friday\n6 = Saturday');

//STEP 4
// let d = new Date();
// console.log(`Yesterday was ${d.getDay() -1}`);
// console.log('------------');
// console.log('0 = Sunday\n1 = Monday\n2 = Tuesday\n3 = Wednesday\n4 = Thursday\n5 = Friday\n6 = Saturday');

//STEP 5
let d = new Date();
console.log(d.getDay());
console.log('------------');
console.log('0 = Sunday\n1 = Monday\n2 = Tuesday\n3 = Wednesday\n4 = Thursday\n5 = Friday\n6 = Saturday');