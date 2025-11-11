// Condition statements in JavaScript
// if, else if, else, switch, while, do...while, for

// Below is example of if...else if...else statement
let number = 10;
if (number > 0) {
  console.log(`${number} is a positive number.`);
} else if (number < 0) {
  console.log(`${number} is a negative number.`);
} else {
  console.log(`${number} is zero.`);
}

// Below is example of switch statement
let day = 3;
let dayName;
switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

// Below is example of for loop
console.log("Day of the week is: " + dayName);
for (let i = 1; i <= 5; i++) {
  console.log(`Iteration number: ${i}`);
}
