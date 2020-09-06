//  String methods

// const firstName = 'Alan'
// const lastName = 'Smith'
// let val ;

// // concatenate
// // val = firstName + lastName
// val = firstName + ' '+ lastName

// // Append
// val = 'Alan'
// val += 'Smith'

// // Escaping

// val = `That's great that you've "found" a job` 

// // length
// val = lastName.length

// // concat
// val = firstName.concat(' ', lastName)

// change case
// val = firstName.toLowerCase()


// template literal

let name = 'Alan'
let age = 21
let drinking = 'beer'
let message;

function drink  () {
    if (age > 18)  {
        return 'beer'
    }else {
        return 'coke'
    }
}

// message = 'Hello , my name is ' + name + 'I  love drinking' + drinking 

message = ` Hello, my name is ${name}. I love drinking ${drink()}`;

console.log(message)