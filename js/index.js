// Prevent us from attempting to use variables
// that are not declared
"use strict"

console.log(1 + 1);         // Output: 2
console.log(1 - 1);          // Output: 0
console.log(1 + "1");        // Output: 11
                             // What? Why? Search for the answer

console.log(3 - 4 * 5)       // Output: -17
console.log((3 - 4) * 5);    // Output: -5
                             // Remember order of precendence

console.log(6 / 5);          // Output: 1.2
console.log(6 % 5);          // Output: 1
                             // Modulus return the remainder. This operator is extremely useful.

console.log(1 == 1);         // Output: true
console.log(1 == "1");       // Output: true
console.log(1 === "1");      // Output: false

console.log(1 || 2);         // Output: 1
console.log(2 || 1);         // Output: 2
console.log(1 && 2);         // Output: false
console.log(1 && 1);         // Output: true



/*let dragonScales = 5;
let unicornHairs = 7;
console.log(dragonScales + unicornHairs); // Output: 12


let phoenixFeathers = 10;
let takenFeathers = 2;
console.log(phoenixFeathers - takenFeathers); // Output: 8

let size1 = 8;
let size2 = 5;
console.log(size1 > size2); // Output: true

let actualSize = 6;
let markedSize = "6";
console.log(actualSize === markedSize); // Output: false

let sailorMoonAvailable = true;
let sailorVenusAvailable = true;
console.log(sailorMoonAvailable && sailorVenusAvailable); // Output: true

let sailorJupiterAvailable = false;
let sailorMarsAvailable = true;
console.log(sailorJupiterAvailable || sailorMarsAvailable); // Output: true

let currentHour = 15; // 3 PM in a 24-hour format
let clockReset = 12;
console.log(currentHour % clockReset); // Output: 3 (3 PM in a 12-hour format)

 let swords = 4;
let spells = 3;
console.log(swords * spells); // Output: 12

