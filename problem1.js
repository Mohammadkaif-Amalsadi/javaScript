// function print(param1) {
//   console.log(param1);
// }

// var tier = "tier1";

// if (tier === "tier1") {
//   print("10LPA");
// } else if (tier === "tier2") {
//   print("5LPA");
// } else {
//   print("4LPA");
// }
// function print(tier) {
//   switch (tier) {
//     case "tier1":
//       return "10LPA";

//     case "tier2":
//       return "5LPA";

//     default:
//       return "4LPA";
//   }
// }
// var tier = print("tier1");
// console.log(tier);

// var tier = "tier1";

// function getSalary(tier) {
//   return tier === "tier1" ? "10LPA" : "tier2" ? "5LPA" : "4LPA";
// }

// console.log(getSalary(tier));

// String methods
let str = "  Hello, World!  ";
console.log(str.charAt(2));
console.log(str.length);
console.log(str.trim().length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.includes("World"));
console.log(str.startsWith("  Hello"));
console.log(str.endsWith("!  "));
console.log(str.indexOf("o"));
console.log(str.slice(2, 7));
console.log(str.replace("World", "JavaScript"));
console.log(str.split(","));
let str2 = "apple, banana, cherry";
let value = str + str2;
let result = str.concat(str2);
console.log(value);
console.log(result);
// // Template literals
// let name = "John";
// let age = 30;
// console.log(`My name is ${name} and I am ${age} years old.`);
// console.log(`Next year, I will be ${age + 1} years old.`);
