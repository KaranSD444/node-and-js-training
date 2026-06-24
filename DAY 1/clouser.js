function human() {
  let species = " humaan";
  return function () {
    console.log(species);
  };
}

let hum = human();
hum();
// console.log(human());

// A function remembers variables from its outer function even after the outer function finishes.