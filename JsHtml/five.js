// function car() {
//   let speed = 0;

//   return function accelerate() {
//     speed += 10;
//     console.log(speed);
//   };
// }

// let c = car();
// c();
// c();
// c();

//this keyword

// let car = {
//   speed: 0,
//   accelerate: function (speed) {
//     this.speed += speed;
//     console.log(`Para = ${speed}`);
//     console.log(this.speed);
//   },
// };

// car.accelerate(10);
// car.accelerate(20);
// car.accelerate(-10);

//Classes in JavaScript

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   set(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   get() {
//     return `My name is ${this.name} and I am ${this.age} years old.`;
//   }
// }

// let p = new Person("John", 30);
// console.log(p.get());
// p.set("Alice", 25);
// console.log(p.get());

// Access Modifiers
// Public: accessible from anywhere
// Private: accessible within the class
// Protected: accessible within the class and its subclasses

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    console.log("2.");
    console.log("Constructor called.");
  }

  getMake() {
    return this.make;
  }

  setMake(make) {
    this.make = make;
  }

  getDetails() {
    console.log("4.");
    console.log("This is a public method/ instance method.");

    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}\n-------------------------------------------------`;
  }

  // Private method

  // Protected method
  _protectedMethod() {
    console.log("This is a protected method.");
  }

  // Static method
  static staticMethod() {
    console.log("3.");
    console.log(
      "This is a static method. It is called without creating an instance."
    );
  }

  // Static property
  static staticProperty = "This is a static property.";

  // Static block
  static {
    console.log("1.");
    console.log(
      "This is a static block. It is executed before the constructor."
    );
  }

  //instance method
  instanceMethod() {
    console.log("This is an instance method.");
  }

  //instance property
  instanceProperty = "This is an instance property.";

  //private property
  #privateProperty = "This is a private property.";

  #privateMethod() {
    console.log(this.#privateProperty);
  }
}

let v = new Vehicle("Toyota", "Camry", 2022);
Vehicle.staticMethod();
console.log(v.getDetails());
v.setMake("Honda");
console.log(v.getDetails());
v._protectedMethod();

// console.log(v.#privateMethod()); cannot access private method
console.log(Vehicle.staticProperty);

// inheritance

console.log(`-----------------------Inheritance----------------------------`);
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    console.log("5.");
    console.log("Constructor called.");
  }
}

let c = new Car("Honda", "Civic", 2022);
console.log(c.getDetails());

// encapsulation
console.log(`-----------------------Encapsulation----------------------------`);
class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      throw new Error("Insufficient funds");
    }
    this.#balance -= amount;
  }

  getBalance() {
    return this.#balance;
  }
}

let account = new BankAccount();
account.deposit(100);
account.withdraw(50);
console.log(account.getBalance());

// console.log(account.#balance); cannot access private property

// Polymorphism
console.log(`-----------------------Polymorphism----------------------------`);
console.log(
  `-----------------------Method Overriding----------------------------`
);
class Shape {
  draw() {
    console.log("Drawing a shape.");
  }
}

class Circle extends Shape {
  draw() {
    console.log("Drawing a circle.");
  }
}

class Rectangle extends Shape {
  draw() {
    console.log("Drawing a rectangle.");
  }
}

let shapes = [new Shape(), new Circle(), new Rectangle()];

for (let shape of shapes) {
  shape.draw();
}

// method overloading

console.log(
  `-----------------------Method Overloading----------------------------`
);
class Calculator {
  add(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      const n = Number(args[i]);
      if (!Number.isNaN(n)) {
        sum += n;
      }
    }
    return sum;
  }
}

let calc = new Calculator();
console.log(calc.add(1, 2));
console.log(calc.add(1, 2, 3));
console.log(calc.add(1, 2, 3, 4));

// Abstraction

console.log(`-----------------------Abstraction----------------------------`);

class BankAccount2 {
  #BALANCE = 0;

  deposit(amount) {
    this.#BALANCE += amount;
  }

  withdraw(amount) {
    if (amount > this.#BALANCE) {
      throw new Error("Insufficient funds");
    }
    this.#BALANCE -= amount;
  }

  getBalance() {
    return this.#BALANCE;
  }
}

let account2 = new BankAccount2();
account2.deposit(100);
account2.withdraw(50);
console.log(account2.getBalance());
