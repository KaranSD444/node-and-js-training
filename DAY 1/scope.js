let species = "humans"; // global scope

function human() {
  console.log(species);
}

human();

function human2() {
  let species2 = "animals"; // function scope
  console.log(species2);
  
}

// console.log(species2);   op ---->reference error


human2()    

if (true) {
    let age = 25; // block scope
    console.log(age);
}

// console.log(age); // Error