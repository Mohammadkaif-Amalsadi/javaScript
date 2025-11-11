// Operators in JavaScript
// Arithmetic, Assignment, Comparison, Logical, Unary, Ternary

console.log("Arithmetic Operators:");
let a = 10;
let b = 5;
let sum = a + b; // Addition
let difference = a - b; // Subtraction
let product = a * b; // Multiplication
let quotient = a / b; // Division

console.log("Sum: " + sum);
console.log("Difference: " + difference);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("----------------------------------");

console.log("Assignment Operators:");
let x = 10; // Simple assignment
x += 5; // x = x + 5
x -= 3; // x = x - 3
x *= 2; // x = x * 2
x /= 4; // x = x / 4
console.log("Final value of x: " + x);

console.log("----------------------------------");
console.log("Comparison Operators:");
let isEqual = a == b; // Equal to
console.log("Is Equal: " + isEqual);
let isNotEqual = a != b; // Not equal to
console.log("Is Not Equal: " + isNotEqual);
let isGreater = a > b; // Greater than
console.log("Is Greater: " + isGreater);
let isLess = a < b; // Less than
console.log("Is Less: " + isLess);
let isGreaterOrEqual = a >= b; // Greater than or equal to
console.log("Is Greater Or Equal: " + isGreaterOrEqual);
let isLessOrEqual = a <= b; // Less than or equal to
console.log("Is Less Or Equal: " + isLessOrEqual);
// Strict equality - considers type
a = 10;
b = "10";
let isStrictEqual = a === b;
console.log("Is Strict Equal: " + isStrictEqual);
// Strict not equality - considers type
let isStrictNotEqual = a !== b;
console.log("Is Strict Not Equal: " + isStrictNotEqual);

console.log("----------------------------------");
console.log("Logical Operators:");
let andOperator = a > 5 && b < 15; // Logical AND
let orOperator = a < 5 || b > 15; // Logical OR
let notOperator = !(a == b); // Logical NOT

console.log("AND Operator: " + andOperator);
console.log("OR Operator: " + orOperator);
console.log("NOT Operator: " + notOperator);

console.log("----------------------------------");
console.log("Unary Operators:");
let increment = ++a; // Increment
let decrement = --b; // Decrement
let typeofA = typeof a; // Type of

console.log("Incremented a: " + increment);
console.log("Decremented b: " + decrement);
console.log("Type of a: " + typeofA);
console.log("----------------------------------");
console.log("Ternary Operator:");
let status = a > b ? "a is greater" : "b is greater or equal";
console.log("Ternary Operator Result: " + status);

console.log("----------------------------------");
console.log("Instanceof Operator:");
let date = new Date();
let isDate = date instanceof Date;
console.log("Is date an instance of Date? " + isDate);
