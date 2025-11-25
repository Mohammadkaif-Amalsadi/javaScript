// let arr = [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1];
// let tree = 4;
// let count = 0;
let arr = ["You", "are", "g"];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] == 0) {
//     let prev = arr[i - 1];
//     let next = arr[i + 1];

//     if (
//       (prev == 0 && next == 0) ||
//       (prev == undefined && next == 0) ||
//       (prev == 0 && next == undefined)
//     ) {
//       arr[i] = 1;
//       count++;
//     }
//   }
// }
// console.log(arr);
// console.log(`${count} trees are formed`);
// console.log(count == tree);

// Arrow Function
const abc = () => {
  console.log("Hello");
};

abc();

const sum = (a, b) => a + b;

let val = sum(10, 20);
console.log(val);

let sumOfNumbers = (a, b) => a + b;
console.log(sumOfNumbers(10, 20));

for (let i = 0; i < arr.length; i++) {
  setTimeout(() => {
    console.log(arr[i]);
  }, 1000 + i * 1000);
}

setInterval(() => {
  console.log("test");
}, 5000);

// lexical scoping
