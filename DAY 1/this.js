class humans {
  constructor(name, age) {
    this.name = name; // referes to current object
    this.age = age;
  }
  talk() {
    console.log("Can talk");
  }

  walk() {
    console.log("Can walk");
  }

  eat() {
    console.log("Can eat");
  }
}

class karan extends humans {
  constructor(name, age) {
    super(name, age);
  }
}

let karan1 = new karan("karan", 22);

console.log(karan1.name);
console.log(karan1.age);

karan1.walk();
karan1.eat();
karan1.talk();
