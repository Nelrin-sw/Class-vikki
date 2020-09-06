console.log("Hello honey")
var foo = "coko"
console.log(foo)
var thisVar = 'first value';
var thatVar = 'second value';
console.log("%s!, %s", thisVar,thatVar)
console.log({
    'Email': '',
    'Groups': {},
    'Id': 33,
    'IsHiddenInUI':false,
})

console.log(document.body);


document.getElementById("paragraph").textContent = "Hello, War";

var element  = document.createElement('h2');
element.textContent = "this is my first class";
document.body.appendChild(element);

// window.alert('Hello Sir')

// alert("pause")


// var age = prompt("How old are u?");
// console.log(age)

// window.confirm("Are u sure ?");

var canvas = document.createElement('canvas');
canvas.width = 500;
canvas.height = 250;

var ctx =canvas.getContext('2d');
ctx.font = '30px Cursive'
ctx.fillText("Hello Nilli", 50 ,50);
document.body.appendChild(canvas)

var img = new Image();
img.src = "https://source.unsplash.com/user/jackie/likes/1600x900";
document.body.appendChild(img);