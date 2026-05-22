// Exercise 1

function calculateAverage(numbers) {
  if (numbers.length === 0) return;
  const sum = numbers.reduce((a, b) => a + b, 0);
  return sum / numbers.length;
}
console.log(calculateAverage([20, 20, 30]));

// Exercise 2

function greet(name) {
  if (!name == "") {
    return "Hello, " + name + "!";
  } else {
    return "Hello!";
  }
}
console.log(greet(""));

// Exercise 3


function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// Exercise 4

function findEvenNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}
console.log(findEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Exercise 5

function calculateFactorial(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }
  return factorial;
}
console.log(calculateFactorial(5));

// Exercises 6
function maxNumber(a, b, c) {
  return Math.max(a, b, c);
}
console.log(maxNumber(1, 2, 3));
// Exercise 7

function multiple(x, y) {
  return x * y;
}
console.log(multiple(2, 2));

// Exercise 8

function discount(totalamount) {
  let discount;
  if (totalamount > 100) {
    discount = totalamount * 0.1;
  } else {
    discount = totalamount * 0.05;
  }
  return discount;
}
console.log(discount(50));

// Exercise 9

function calculateMatrixSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++)
    for (let j = 0; j < matrix[i].length; j++) sum += matrix[i][j];
  return sum;
}
console.log(calculateMatrixSum([2, 2], [2, 2]));
