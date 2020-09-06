"use strict";

// switch
var furit = "mango";

switch (furit) {
  case "Apple":
    console.log("The colour is red");
    break;

  case "Banana":
    console.log("The colour is yellow");
    break;

  case "Orange":
    console.log("The colour is orange");
    break;

  case "Kiwi":
    console.log("The colour is green");
    break;

  default:
    break;
}

console.log(furit);
var da = new Date().getDay();

switch (da) {
  case 0:
    console.log("Sunday");
    break;

  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  case 4:
    console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  case 6:
    console.log("Saturday");
    break;

  default:
    break;
}

; // funtion

function user(name, age) {
  console.log("My name is ".concat(name, ". I am ").concat(age, " years old."));
}

;
console.log(user(name = "Nelli", age = 13));