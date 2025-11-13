// let str = "  Some string!  ";
// console.log(str.charAt(0));
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.repeat(3));
// console.log(str.trim());

// console.log(str.search("Some"));

// let reversedStr = str.split("").reverse().join("");
// console.log(reversedStr);
// search returns the index of the first occurrence of the specified value

let n = 5;
for (let i = 0; i < n; i++) {
  let star = "*";
  console.log(star.repeat(i + 1));
}

// JavaScript to print rotating perecise DNA pattern wth stars and spaces
let lines = 10;
for (let i = 0; i < lines; i++) {
  let line = "";
  for (let j = 0; j < lines; j++) {
    if ((i + j) % 4 === 0) {
      line += "*";
    } else {
      line += " ";
    }
  }
  console.log(line);
}
