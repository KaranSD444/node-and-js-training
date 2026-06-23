let arr = [10, "hello", 20, 20.5]; // can store any datatype
console.log(arr);


arr.push("karan");
console.log(arr);

arr.pop();
console.log(arr);


arr.unshift("karan");//adding element at the first
console.log(arr);

arr.shift();
console.log(arr); // remove the element from the first array 

console.log(arr.length);

console.log(arr.indexOf("hello")); // gives the index of the element


/// Check the existence of that element in parameter 
console.log(arr.includes(10)); // true
console.log(arr.includes("karan"));// false 

arr.sort()
console.log(arr);

