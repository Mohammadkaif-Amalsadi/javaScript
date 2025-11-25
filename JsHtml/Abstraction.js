//Abstraction
//Difinition - Abstraction is the process of hiding the
//internal details and showing only the necessary information to the user

class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  getDetails() {
    return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
  }
}

let v = new Vehicle("Toyota", "Camry", 2022);
console.log(v.getDetails());
