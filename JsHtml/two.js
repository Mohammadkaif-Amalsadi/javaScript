function Outer() {
  let count = 0;
  function Inner() {
    count++;
    console.log(count);
    console.log("------------------------------------------------");
  }
  return Inner;
}

let val = Outer();
val();
val();
val();

// Closure is a function that has access to outer function variables
// it will retain outer function variables even after outer function is executed
