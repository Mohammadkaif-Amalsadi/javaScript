// // Datatypes in JavaScript
// console.log("This is the data types JavaScript file.");
// export const myString = "Hello, World!"; // String
// export const myNumber = 42; // Number
// export const myBoolean = true; // Boolean
// export const myArray = [1, 2, 3, 4, 5];
// export const myObject = { name: "Alice", age: 30 }; // Object
// export const myNull = null;
// export const myUndefined = undefined;
// export const mySymbol = Symbol("unique");

// console.log("String:", myString);
// console.log("Number:", myNumber);
// console.log("Boolean:", myBoolean);
// console.log("Array:", myArray);
// console.log("Object:", myObject);
// console.log("Null:", myNull);
// console.log("Undefined:", myUndefined);
// console.log("Symbol:", mySymbol);

// let value;
// console.log(value); // undefined
// value = "Now I have a value!";
// console.log(value); // "Now I have a value!"
// value = null;
// console.log(value); // null

// // Export means to make the variable or function available for import in other files.

// // In this file, we are defining various data types and exporting them for use in other JavaScript files.

// // Primitive  | Non-Primitive
// // ---------------------------------------
// // String     |   Object
// // Number     |   Array
// // Boolean    |   Function
// // Null       |
// // Undefined  |
// // Symbol     |
// // ---------------------------------------

// Javascript to generate snake game with different colors for snake and food. and score display. and game over condition. and restart option. and increasing speed as score increases. use arrow keys to control the snake. and full screen canvas.

// Game Canvas for Data.js
// Pacman Game using JavaScript and HTML5 Canvas

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "yellow";
let pacmanX = canvas.width / 2;
let pacmanY = canvas.height / 2;
let pacmanRadius = 30;
let mouthOpen = true;
function drawPacman() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "yellow";
  ctx.beginPath();
  if (mouthOpen) {
    ctx.arc(pacmanX, pacmanY, pacmanRadius, 0.2 * Math.PI, 1.8 * Math.PI);
  } else {
    ctx.arc(pacmanX, pacmanY, pacmanRadius, 0, 2 * Math.PI);
  }
  ctx.lineTo(pacmanX, pacmanY);
  ctx.fill();
}

setInterval(() => {
  mouthOpen = !mouthOpen;
  drawPacman();
}, 300);
drawPacman();

// Below is code for movement of pacman using arrow keys
document.addEventListener("keydown", (event) => {
  const step = 10;
  switch (event.key) {
    case "ArrowUp":
      pacmanY -= step;
      break;
    case "ArrowDown":
      pacmanY += step;
      break;
    case "ArrowLeft":
      pacmanX -= step;
      break;
    case "ArrowRight":
      pacmanX += step;
      break;
  }
  drawPacman();
});
drawPacman();
