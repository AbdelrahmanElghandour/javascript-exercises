const add = function (a, b) {
  return Number(a) + Number(b);
};

const subtract = function (a, b) {
  return Number(a) - Number(b);
};

const sum = function (arr) {
  return arr.reduce((acc, num) => {
    return acc + num;
  }, 0)
};

const multiply = function (arr) {
  return arr.reduce((acc, num) => {
    return acc * num;
  }, 1)
};

const power = function (base, exponent) {
  let answer = 1
  for (let i = 0; i < exponent; ++i) {
    answer *= base;
  }
  return answer
};

const factorial = function (num) {
  let answer = 1
  for (let i = 1; i <= num; ++i) {
    answer *= i
  }
  return answer
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
