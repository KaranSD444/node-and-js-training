let a = 10;
let b = 10;

function multiplut(a, b) {
  let c = a * b;
}
function add(a, b) {
  let c = a + b;
  return c;
}
function divide(a, b) {
  try {
    let c = a / b;  
  } catch (err) {
    console.log(err);
  }
}
console.log(add(10, 29));
console.log(multiplie(120,2));
console.log(divide(21/22));
