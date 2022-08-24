// Arrays In javascript
// Adding  Elements
// Finding Elements
// Removing Elements
// Splitting Arrays
// Combining Arrays

// Adding Elements
// const numbers = [3, 4];
// END
// numbers.push (5,6);
// console.log (numbers)

// Beginning
// numbers.unshift (1, 2);
// console.log (numbers)

// Middle
// numbers.splice (1, 0 , 5, 6);
// console.log (numbers)

// Finding Elements (Primitive)
// const numbers = [1, 2, 3, 1, 4];
// console.log(numbers.indexOf(a));
// console.log(numbers.indexOf(1));
// console.log(numbers.indexOf(3));

// console.log(numbers.lastIndexOf(1));
// console.log (numbers.includes(3))

// Finding Elements (Reference)
// const courses = [
//  { id: 1, name: "a" },
//  { id: 2, name: "b" },
// ];
// console.log (courses.includes({id:1, name:'a'}))
// const course = courses.find(function(course){
//   return course.name === 'a'});
//   console.log (course);

// const courseindex = courses.findIndex(function(course){
//    return course.name === 'b'});
//    console.log (courseindex);

// Arrow Function
// const course = courses.find (course=> course.name === 'a');
// console.log (course);

// Removing Elements
// const numbers = [1, 2, 3, 4];

// END
// numbers.pop ();
// console.log (numbers)

// Beginning
// numbers.shift ();
// console.log (numbers)

// Middle
// numbers.splice (2, 1)
// numbers.splice (2, 2)
// console.log (numbers)

// Emptying an Array
// let numbers = [1, 2, 3, 4];
// let another = numbers;

// solution1
// numbers = [];
// console.log (another);
// console.log (numbers);

// solution2
// numbers.length = 0;
// console.log (numbers);
// console.log (another);

// combining and slicing of arrays
// const first = [1, 2, 3]
// const second = [4, 5, 6]
// const combined = first.concat(second);
// console.log (combined)
// const slice = combined.slice (2,4)
// console.log (slice);

// Spread Operator
// const combined = [...first, ...second]
// const combined = [...first, 8, 9, ...second]
// console.log (combined)

// iterating an array
// const numbers = [1, 2, 3];
// for (let number of numbers)
// console.log(number);

// numbers.forEach (function(number){
//     console.log (number);
// })

// numbers.forEach (number=> console.log(number));
// numbers.forEach ((number, index)=> console.log (index, number));

// Joining Arrays
// const numbers = [1, 2, 3];
// const joined = numbers.join ('----');
// console.log (joined)

// const message = "this is my first message"
// const parts = message.split (' ');
// console.log (parts)

// Sorting Arrays
// const numbers = [3, 1, 2, 4];
// numbers.sort();
// console.log (numbers)
// numbers.reverse ();
// console.log (numbers);

// const courses = [
//     {id:1, name: 'node.js'},
//     {id:2, name: 'Javascript'},
// ];
// courses.sort (function (a,b){
//     const nameA = a.name.toUpperCase;
//     const nameB = b.name.toUpperCase;
//     if (nameA < nameB) return -1;
//     if (nameA > nameB) return 1;
//     return 0;
// });
// console.log (courses);

// Testing the elements of an array
// const numbers = [1, 2, 3];
// const allPositive = numbers.every(function(value){
//     return value >= 0;})
// console.log (allPositive);
// const numbers = [1, 2, -1, 3];
// const onePositive = numbers.some(function(value){
//     return value >= 0;})
// console.log (onePositive);

// Filtering an array
// const numbers = [1, -1, 2, 3];
// const filtered = numbers.filter (value=> value>=0);
// console.log (filtered)

// Mapping an array
// const numbers = [1, -1, 2, 3]
// const items = numbers
// .filter (n=> n>=0)
// .map (n=>({value:n}))
// .filter (obj=> obj.value>1)
// .map (obj=> obj.value);
// console.log (items)

// Reducing an Array
// const sum = numbers.reduce ((accumulator, currentvalue)=> 
// accumulator + currentvalue);
// console.log (sum);









