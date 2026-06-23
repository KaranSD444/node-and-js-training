let a = 10;
console.log(a); //10

{
  let a = 100;

  console.log(a); // bloack scope
}

function let1() {
  let a = 100;
  let b = 10;
  console.log(a); //100
  console.log(b); //10
}

let1();
try {
  console.log(b);
} catch (err) {
  console.log(err); //error
}
console.log(a); //10
