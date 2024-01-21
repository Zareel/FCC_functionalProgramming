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
/*
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
*/

/*
const prepareGreenTea = () => "greenTea";
const prepareBlackTea = () => "blackeTea";

const getTea = (prepareTea, numOfTea) => {
  const cupsOfTea = [];
  for (let i = 1; i <= numOfTea; i++) {
    let cupOfTea = prepareTea();
    cupsOfTea.push(cupOfTea);
  }
  return cupsOfTea;
};
console.log(getTea(prepareGreenTea, 4));
console.log(getTea(prepareBlackTea, 5));
*/

//* Mutation and side effect => in functional programming changing or altering things is called mutation and the outcome is called side effect
/*
const prepareTea = () => "blackTea";

const getTea = (numOfCups) => {
  const teaCups = [];
  for (let i = 0; i < numOfCups; i++) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

console.log(getTea(3));
*/
/*
const prepareBlackTea = () => "blackTea";
const prepareGreenTea = () => "greenTea";

const getTea = (prepareTea, numOfCups) => {
  const teaCups = [];
  for (let i = 0; i < numOfCups; i++) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};
// const blackTea = getTea(prepareBlackTea, 5)
// const greenTea = getTea(prepareGreenTea, 3)

console.log(getTea(prepareGreenTea, 5));
console.log(getTea(prepareBlackTea, 3));
*/
