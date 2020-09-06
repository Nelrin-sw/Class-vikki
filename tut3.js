// Measuring time - console.time()

// console.time('response in');

// alert('Click to continue');
// console.timeEnd('response in');


// var elms = document.getElementsByTagName('*');
// console.time('Loop time');

// for (var i =0; i < 5000; i++) {
//     for (var j = 0, length = elms.length; j < length ; j++){

//     }

// }
// console.timeEnd('Loop time');


// Formatting console output

console.log ('%s has %d points', 'Sam', 100);

console.log("%cHello world!", "color: blue; font-size:xx-large");


// Tabulating Values - console.table()

var personArr = [
    {
        "personId" :123,
        "name": "Honey",
        "city":"Nodia",
    },
    {
        "personId" :124,
        "name": "Nilli",
        "city":"Sonipat",
    },
    {
        "personId" :125,
        "name": "Vikki",
        "city":"Delhi",
    },
    {
        "personId" :126,
        "name": "Nani",
        "city":"Ghar",
    },
];
console.table(personArr,['name', 'city','personId']);