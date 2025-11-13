{
  var name = "kaif"; //let and const are block scoped
  //var is function scoped
  console.log(name);
}
console.log(name);

// difference between var, let and const
// var                |     let                | const
// -------------------------------------------------------------------
// function scoped    |   block scoped        |   block scoped
// can be updated     |   can be updated      |   cannot be updated
// redeclared         |   cannot be redeclared|   cannot be redeclared
// -------------------------------------------------------------------
