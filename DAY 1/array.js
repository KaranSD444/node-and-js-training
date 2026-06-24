let arr = ["Human1", "Karan", 20, 20.5]; // can store any datatype
console.log(arr);

arr.push("karan");
console.log(arr);

arr.pop();
console.log(arr);

arr.unshift("karan"); //adding element at the first
console.log(arr);

arr.shift();
console.log(arr); // remove the element from the first array

console.log(arr.length);

console.log(arr.indexOf("hello")); // gives the index of the element

/// Check the existence of that element in parameter
console.log(arr.includes(10)); // true
console.log(arr.includes("karan")); // false

arr.sort(); //sorting
console.log(arr);

arr.reverse();
console.log(arr);

let arr1 = ["SD", "Karan"];
let arr2 = ["karan", "SD"];

let arr3 = arr1.concat(arr2);

let name = arr.slice(1, 2);
console.log(name);

arr.forEach(function (val) {
  //Loop through array
  console.log(val);
});

let double = arr.map((arr) => arr * 2); // create a new array
console.log(double);


arr =[ 2,2,312, 12,32];
let greater12 = arr.filter((arr) => arr > 12); // filter() - Filter values
console.log(greater12);

let found = arr.find((arr) => arr === 20); // find() - Find first matching value
console.log(found);

let sum = arr.reduce((total, num) => total + num, 0); // reduce() - Sum all values
console.log(sum);

// Largest Number in Array
let values = ["Apple", "Banana", "pineapple", "watermelon", "orange"];
let largest = Math.max(...values); // doesnt give  the op for the string // op NaN
console.log("Largest Number:", largest);

// Smallest Number in Array
let smallest = Math.min(...values); // doesnt give  the op for the string // op NaN
console.log("Smallest Number:", smallest);
