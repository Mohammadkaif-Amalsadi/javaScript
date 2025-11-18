// let color = ["Yellow", "Red", "Blue", "White", "Green"];
// console.log(color);
// color.push("Violet");
// console.log(color);
// color.pop();
// console.log(color);
// color.shift();
// console.log();
// color.unshift();
// console.log();

// console.log(color.sort());
// console.log(color.reverse());
// let value = color.splice(1, 2, "brown", "black");
// console.log(value);
// console.log(color);
// console.log(color.indexOf("Blue"));

// let color = ["Yellow"];
// let key = ["Honda"];

// let val = color.concat(key);
// console.log(val);

let str = "Im attending class";
// find largest word in the string
let largestWord = "";
for (let i = 0; i < str.length; i++) {
  let word = "";
  while (str[i] !== " " && i < str.length) {
    word += str[i];
    i++;
  }
  if (word.length > largestWord.length) {
    largestWord = word;
  }
}
console.log(largestWord);

let n = 5;
for (let i = 0; i < n; i++) {
  let space = " ".repeat(n - i - 1);
  let star = "*".repeat(i + 1);
  console.log(space + "" + star);
}

for (let i = 0; i <= n; i++) {
  let star = "*".repeat(i);
  console.log(star);
}
for (let i = 0; i < n; i++) {
  let star = "*".repeat(n - i - 1);
  console.log(star);
}
