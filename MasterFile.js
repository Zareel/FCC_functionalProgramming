// Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects out side of the function scope Input => Process => Output

/*
functional programming is about
* isolated functions => there is no dependence on the state of the program, which includes global variables that are subject to change 
* pure functions => the same input always gives the same output
* functions with limited side effects => any changes of mutatiions to the state of the program outside the function are carefully controlled

*/

//callbacks are functions that are slipped or passed into another function to decide the invocation of that function

//The functions that take a function as an argument, or return a function as a return value, are called higher order functions.

//When functions are passed in to or returned from another function, then those functions which were passed in or returned can be called a lambda.

const prepareTea = () => "greenTea";
//console.log(prepareTea());

const getTea = (numOfTea) => {
  let teaCups = [];
  for (let i = 1; i <= numOfTea; i++) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
const tea4TeamFCC = getTea(4);
console.log(tea4TeamFCC);
