//Inheritance
// Difinition - Class inherits properties and methods from another class
// its called inheritance
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }

  setMake(make) {
    this.make = make;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
  }
}

let c = new Car("Honda", "Civic", 2022);
console.log(c.getDetails());
c.setMake("Toyota");
console.log(c.getDetails());
