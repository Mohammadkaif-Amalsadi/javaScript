// setTimeout(() => console.log("value 1"), 3000);
// setTimeout(() => console.log("value 2"), 2000);
// setTimeout(() => console.log("value 3"), 1000);

// let thread = setTimeout(() => console.log("value 4"), 5000);
// clearTimeout(thread);

// // Converting async programming to sync programming using async/await

// async function syncProgramming() {
//   let promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("value 1"), 3000);
//   });
//   let promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("value 2"), 2000);
//   });
//   let promise3 = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("value 3"), 1000);
//   });

//   let values = await Promise.all([promise1, promise2, promise3]);
//   console.log(values);
// }

// syncProgramming();

// Explanation of this code
// This code is an example of asynchronous programming using setTimeout
// and how it can be converted to synchronous programming using async/await
// and Promise.all. The code logs three values to the console after different
// periods of time. The async/await syntax is used to wait for the three
// promises to resolve and then log the values to the console.

// let arr = [2, 3, 1, 1, 4];

let arr = [2, 3, 2, 5, 1, 1, 3, 1, 1, 4];
let jmp = 0;

for (let i = 0; i < arr.length; ) {
  let currentCoins = arr[i];
  let max = arr[i];
  let idx = i;
  for (let j = i; j <= i + currentCoins; j++) {
    if (arr[j] > max) {
      max = arr[j];
      idx = j;
    }
  }
  if (idx == i) {
    i = idx + arr[idx];
  } else {
    i = idx;
  }
  // console.log(max);

  jmp++;
  if (i >= arr.length - 1) {
    break;
  }
}
console.log(jmp);
