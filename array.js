var arr = [1, 2, 3, 4, 5];

console.log("Original Array:", arr);

let newarr = new Array(6, 7, 8, 9, 10);
console.log("New Array:", newarr);
newarr.push(11);
console.log("After Push:", newarr);
newarr.pop();
console.log("After Pop:", newarr);
newarr.shift();
console.log("After Shift:", newarr);
newarr.unshift(0);
console.log("After Unshift:", newarr);
