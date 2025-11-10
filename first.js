console.log("This is the first JavaScript file.");

function print(name) {
  return `Hello, ${name}!`;
}

console.log(print("World"));
function add(a, b) {
  return a + b;
}

var a = 5; //Var is function-scoped
let b = 10; //Let is block-scoped
const sum = add(a, b);
console.log(`The sum of ${a} and ${b} is ${sum}.`);

a = 20;
b = 30;
const newSum = add(a, b);
console.log(`The new sum of ${a} and ${b} is ${newSum}.`);

var name = "Bob"; // Redeclaring var is allowed
var name = "Charlie"; // Redeclaring var is allowed
name = "Alice"; // Updating var is allowed
console.log(print(name));

let city = "New York"; // Redeclaring let in the same scope will cause an error
// let city = "Los Angeles"; // Uncommenting this line will cause an error
city = "Chicago"; // Updating let is allowed
console.log(`City: ${city}`);

const Country = "USA"; // Redeclaring const in the same scope will cause an error
// const Country = "Canada"; // Uncommenting this line will cause an error
// Country = "Mexico"; // Uncommenting this line will cause an error
console.log(`Country: ${Country}`);

// var can be updated and redeclared
// let can be updated but not redeclared
// const cannot be updated or redeclared
custom(name, city, Country);

function custom(name, city, country) {
  console.log("----------------------------------");
  console.log("Custom Function Output:");
  console.log(`Name: ${name} ${(name = "Test")}`);
  console.log(`City: ${city}`);
  console.log(`Country: ${country}`);
}
