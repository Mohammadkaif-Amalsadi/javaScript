// Polymorphism

// Difinition - Ability of method to act differently based on
// parameters is called polymorphism

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
// Also known as method overriding

// method overloading

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
