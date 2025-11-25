// let person = {
//   name: "John",
//   email: "lTQ2k@example.com",
//   city: "New York",
// };

// for (let key in person) {
//   console.log(`${key}: ${person[key]}`);
// }

// let response = [
//   {
//     name: "NOTHING",
//     company: "NOTHING",
//   },
//   {
//     name: "IPhone 12",
//     company: "Apple",
//   },
//   {
//     name: "Pixel PRO",
//     company: "Google",
//   },
//   {
//     name: "IPhone 14",
//     company: "Apple",
//   },
// ];

// let result = [];
// //write a program just to print apple phones
// for (let i = 0; i < response.length; i++) {
//   if (response[i].company == "Apple") {
//     result.push(response[i].name);
//   }
// }

// console.log(result);

//object methods

// let object = {
//   name: "Iphone 12",
//   company: "Apple",
//   price: "12000",
// };

// // console.log(Object.keys(object));
// // console.log(Object.values(object));
// // console.log(Object.entries(object));

// let objectTwo = {
//   name: "Galaxy",
//   company: "Samsung",
//   price: "10000",
// };

// console.log(Object.assign(object, objectTwo));

// what is hoisting - variable declaration is moved to the top / function is moved to the top
// adv
// abc();
// function abc() {
//   console.log("Function");
// }

// sum();
// function sum() {
//   let a = 10;
//   let b = 20;
//   let sum = a + b;
//   console.log(sum);
// }

// {
//   var name = "test"; // function scoped, let is block scoped
//   console.log(name);
// }
// console.log(name);

// console.log(10 + "10");
// //implicit type conversion (below)
// console.log(10 - "10");
// console.log(2 * "10");
// console.log("10" / "10");

//explicit type conversion (below)
// console.log(String(123));
// console.log(10 + Number("10"));
// console.log(10 - Number("10"));
// console.log(2 * Number("10"));
// console.log(Number("10") / Number("10"));

// console.log(Boolean(0));
console.log(3 + true);
console.log(3 - true);
console.log(3 - false);
console.log(3 + false);
console.log("3" + true);
console.log("3" - true);

console.log(2 == 2);
console.log((2 == 2) == 2);
console.log((((2 == 2) == 2) == 2) == 0);

console.log(x);
var x;
