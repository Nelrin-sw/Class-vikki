// IF statement

// let mark  = 5

// Abstract equality  comparsion

// if (mark == 50) {
//     console.log('The mark is 50')
// }else {
//     console.log('The mark is not 50')
// }

// if (mark != 40) {
//     console.log('The mark is Not 40')
// }else {
//     console.log('The mark is 40')
// }


// Strickly equality comparsion

// if (mark !== 50) {
//     console.log('The mark is Not 50')
// }else {
//     console.log('The mark is  50')
// }

// check undefined
// if (typeof mark !== 'undefined') {
//     console.log (`The mark is ${mark}`)
// }else {
//     console.log ('The mark is undefined')
// }

// greater than or equal 
// less than
// if (mark < 50) {
//     console.log('You fail the test')
// }else {
//     console.log('You pass the test')
// }

// logical operator

let hour = 11

if (hour < 12) {
    console.log('Good Morning!')
} else if (hour < 20) {
    console.log('How do you do?')
} else {
    console.log('Good Evening')
}
// And operator
let mark = 89

if (mark > 50 && mark <= 80) {
    console.log('Good')
} else if (mark > 80) {
    console.log('Excellent !!')
} else {
    console.log(('Keep it up'))
}

// OR operator
let hour = 18;
let isWeekend = true

if (hour < 10 || hour > 17 || isWeekend) {
    console.log('The office is now closed')
} else {
    console.log('The office is now opened')
}


//  Ternary  operator

let age = 21

if (age < 18) {
    console.log('You Cannot drink wine')
} else {
    console.log('You can drink wine')
}

const drink = age < 18 ? 'You cannot drink beer' : 'You can drink beer'

console.log(drink)

// one line
if (age < 18) console.log('You Cannot drink beer');
else console.log('You can drink beer')