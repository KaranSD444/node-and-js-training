const a = 10;
console.log(a); //10
{
  const a = 19;
  console.log(a); //19 block scope
}
function const1() {
  const a = 100;
  const b = 10;
  console.log(a); //100
  console.log(b); //10
}

const1();
try {
  console.log(b);
} catch (err) {
  console.log(err); //error
}
console.log(a); //19
