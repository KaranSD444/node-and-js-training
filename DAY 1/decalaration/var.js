var a = 10;
console.log(a); //10
var a = 19;
console.log(a); //19

function var1() {
  var a = 100;
  var b = 10;
  console.log(a); //100
  console.log(b); //10
}

var1();
try {
  console.log(b);
} catch (err) {
  console.log(err); //error
}
console.log(a); //19

// var is functional scope
