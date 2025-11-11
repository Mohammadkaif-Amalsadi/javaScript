// Datatypes in JavaScript
console.log("This is the data types JavaScript file.");
export const myString = "Hello, World!"; // String
export const myNumber = 42; // Number
export const myBoolean = true; // Boolean
export const myArray = [1, 2, 3, 4, 5];
export const myObject = { name: "Alice", age: 30 }; // Object
export const myNull = null;
export const myUndefined = undefined;
export const mySymbol = Symbol("unique");

console.log("String:", myString);
console.log("Number:", myNumber);
console.log("Boolean:", myBoolean);
console.log("Array:", myArray);
console.log("Object:", myObject);
console.log("Null:", myNull);
console.log("Undefined:", myUndefined);
console.log("Symbol:", mySymbol);

let value;
console.log(value); // undefined
value = "Now I have a value!";
console.log(value); // "Now I have a value!"
value = null;
console.log(value); // null

// Export means to make the variable or function available for import in other files.

// In this file, we are defining various data types and exporting them for use in other JavaScript files.

// Primitive  | Non-Primitive
// ---------------------------------------
// String     |   Object
// Number     |   Array
// Boolean    |   Function
// Null       |
// Undefined  |
// Symbol     |
// ---------------------------------------
