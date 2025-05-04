const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const sum = array => array.reduce((total, current) => total + current, 0);
const multiply = array => array.reduce((product, current) => product * current);
const power = (a, b) => Math.pow(a, b);
const factorial = function(n) {
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
};