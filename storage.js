{
  var name = "kaif"; //let and const are block scoped
  //var is function scoped
  console.log(name);
}
console.log(name);

// difference between var, let and const
// var      |     let       | const
// ---------------------------------------
// function |   block      |   block
// can be   |   can be     |   cannot be
// updated  |   updated    |   updated
// redeclared|  cannot be  |   cannot be
// ---------------------------------------
