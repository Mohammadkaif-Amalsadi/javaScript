function outer() {
  let amount = 1000;
  console.log("Amount: " + amount);
  function addMoney(value) {
    amount += value;
    console.log(amount);
    console.log("------------------------------------------------");
  }

  return addMoney;
}

let val = outer();
val(2000);
val(3000);
let val2 = outer();
val2(4000);

val(2000);
val(3000);
