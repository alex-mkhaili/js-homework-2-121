// #1

// function positiveNumberSum (...numbers) {
//     let numberSum = 0;
//     for (let item of numbers) {
//         if (item > 0) {
//             numberSum += item;
//         }
//     }
//     return numberSum;
// }

// let result = positiveNumberSum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
// console.log(result);



// #2

// function numberSum (...numbers) {
//         let numberSum = 0;
//         for (let item of numbers) {
//             numberSum += item;
//         }
//         return numberSum;
// }
// let result = numberSum(10, 50, 6, 7, 8, 11, 6, 3, 9);
// console.log(result);



// #3

// let user = {
//     firstname: 'giorgi',
//     lastname: 'saakadze',
//     age: 32,
//     isloggedin: true
// };

// function userName () {
//     if (user.isloggedin == true) {
//         return user.firstname + " " + user.lastname;
//     } else {
//         return "false"
//     };
// }
// let result = userName();
// console.log(result);
  


// #4
// function maxNumber(...numbers) {
//     let element = 0;
//     for (let item of numbers) {
//         if(element < item) {
//             element = item
//         }
//     }
//     return element
// }

// let result = maxNumber(7, 2, 323, 998, 541, 2223, 52, 56, 87, 22, 122, 9);
// console.log(result);



// #5

// let array = [1,2,4,10,34,5,7,87];

// for (let item of array) {
//     if (item > 0 && item < 10) {
//         console.log(item);
//     }
// }



// #6

// let numbers = [1,2,3,4,5,6,7,8,9,10]

// for (let item of numbers) {
//     console.log(item)
//     if (item == 5) {
//         break;
//     }
// }