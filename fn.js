const hello = function Hello(surname) {
  // this process is called function expression
  console.log("My name is Kaif " + surname);
  return "Full Name: Kaif Iqbal " + surname;
};
let msg = hello("amalsadi");
console.log(msg);
// ----------------------------------

function sumOfNumbers(a, b) {
  return a + b;
}

let result = sumOfNumbers(5, 10);
console.log("Sum of 5 and 10 is: " + result);
// ----------------------------------

// Below is the example of IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("This function runs immediately upon definition!");
})();

// Below is the example of Arrow Function
const multiply = (x, y) => {
  return x * y;
};

let product = multiply(4, 5);
console.log("Product of 4 and 5 is: " + product);
// ----------------------------------

// Below is the example of Recursive Function
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

let factResult = factorial(5);
console.log("Factorial of 5 is: " + factResult);
// ----------------------------------

// Below is the example of Callback Function
function fetchData(callback) {
  setTimeout(() => {
    const data = { id: 1, name: "John Doe" };
    callback(data);
  }, 2000);
}
fetchData(function (data) {
  console.log("Fetched Data:", data);
});
// ----------------------------------

//Below is the example of Function Hoisting
hoistedFunction();

function hoistedFunction() {
  console.log("This function is hoisted!");
}

// ----------------------------------
