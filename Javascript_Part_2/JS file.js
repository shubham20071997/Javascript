// Dates

// const d = new Date(2018, 11, 24, 10, 33, 30, 0);
// document.getElementById("demo").innerHTML = d;

// const d = new Date("October 13, 2014 11:13:00");
// document.getElementById("demo").innerHTML = d;

// const d = new Date(-100000000000);
// document.getElementById("demo").innerHTML = d;

// const d = new Date();
// document.getElementById("demo").innerHTML = d.toUTCString();

// JS Date Formats
// const d = new Date("2015");
// document.getElementById("demo").innerHTML = d;

// const d = new Date("Mar 25 2015");
// document.getElementById("demo").innerHTML = d;

// const d = new Date("January 25 2015");
// document.getElementById("demo").innerHTML = d;

// const d = new Date("JANUARY, 25, 2015");
// document.getElementById("demo").innerHTML = d;

// const msec = Date.parse("March 21, 2012");
// document.getElementById("demo").innerHTML = msec;

// let msec = Date.parse("March 21, 2012");
// const d = new Date(msec);
// document.getElementById("demo").innerHTML = d;

// JS For Loop
// const cars = ["BMW", "Volvo", "Saab", "Ford"];
// let i, len, text;
// for (i = 0, len = cars.length, text = ""; i < len; i++) {
//     text += cars[i] + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

//For in loop
// const person = { fname: "John", lname: "Doe", age: 25 };

// let txt = "";
// for (let x in person) {
//     txt += person[x] + " ";
// }

// document.getElementById("demo").innerHTML = txt;

//For each
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);
// document.getElementById("demo").innerHTML = txt;

// function myFunction(value) {
//     txt += value + " ";
// }

// For of
// let language = "JavaScript";
// let text = "";
// for (let x of language) {
//     text += x + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// While loop
// let text = "";
// let i = 0;
// while (i < 10) {
//     text += "The value of i is " + i + "<br>";
//     i++;
// }
// document.getElementById("demo").innerHTML = text;

// Switch Loop
// let day;
// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
// }
// document.getElementById("demo").innerHTML = "Today is " + day;

// Continue
// let text = "";
// for (let i = 0; i < 10; i++) {
//     if (i === 3) { continue; }
//     text += "The number is " + i + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// Iterating over Set
// const letters = new Set(["a", "b", "c"]);
// let text = "";
// for (const x of letters) {
//     text += x + " ";
// }
// document.getElementById("demo").innerHTML = text;

// Iterating over a Map
// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);

// let text = "";
// for (const x of fruits) {
//     text += x + "<br>";
// }

// document.getElementById("demo").innerHTML = text;

//JS Sets
// const letters = new Set(["a", "b", "c"]);
// const letters = new Set();
// letters.add("a");
// letters.add("a");
// letters.add("b");
// letters.add("c");
// letters.add("c");
// letters.add("c");
// letters.add("c");
// letters.add("c");
// letters.add("c");
// let text = "";
// letters.forEach(function (value) {
//     text += value + "<br>";
// })

// document.getElementById("demo").innerHTML = letters.size;

// for (const x of letters.values()) {
//     text += x + "<br>";
// }
// // document.getElementById("demo").innerHTML = letters.values();
// document.getElementById("demo").innerHTML = text;

//JS Maps
// const fruits = new Map();
// fruits.set("apples", 500);
// fruits.set("banana", 800);
// fruits.delete("banana");
// document.getElementById("demo").innerHTML = fruits.size;
// // document.getElementById("demo").innerHTML = fruits.get("apples");

// const fruits = new Map([
//     ["apples", 500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);

