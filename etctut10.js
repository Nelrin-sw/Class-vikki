// general loop

// for (let i =0; i < 10; i++)
// {
//     if (i ===3 ){
//         console.log('Three')
//       break
// } 
//     console.log (i)
// }


// WHILE LOOP
// let i = 0
// while (i < 10) {
//     console.log(i)
//     i++;
// }

// Do While Loop

// let i = 0
// do {
//     console.log(i)
//     i++
// }while (i < 10);

// Loop through array

const users = ['Alan', 'Peter', 'John']
// For  loop
// for (let i = 0; i < users.length; i++) {
//     console.log(users[i]);

// }
//  for of 
// for (const user of users) {
//     console.log(user)
// }

// For each

// users.forEach(function (user, index, array) {
//     console.log(index, user, array)
// });

// map

// const hiUsers = users.map(function (user ) {
//     return `Hi  ${user}`
// })
// console.log(hiUsers)

// For in 
// const user = {
//     name: 'Alan',
//     age :19,
//     title: 'Programmer'
// }
// for (const key in user) {
//     console.log(`${key} : ${user[key]}`)
// }

// Confirm

if (confirm('Are you sure to delete')) {
    alert('The file is deleted')
} 