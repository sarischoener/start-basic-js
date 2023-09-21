// 01) Spot the errors and fix them
const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}
console.log(result);
// Returns Greater than 10 but should return Greater than 20

// 2) oddEven function
function oddEven(num) {
  let result;
  if (num % 2 === 0) {
    result = "even";
  } else {
    result = "odd";
  }
  return result;
}
// TODO: Implement the oddEven function

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even
