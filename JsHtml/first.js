function Outer() {
  let name = "kaif";
  console.log(name);
  function Inner() {
    let name2 = "kaif2";
    console.log(name2);
    console.log("------------------------------------------------");
  }
  return Inner;
}

let val = Outer();
val();
val();
Outer();
// Colsure is a combination of inner and outer function,
// where inner function has access to outer function variables
