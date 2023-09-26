//06) arrays
//01) remove Item function

function removeItem(givenArray, index) {
  let copyGivenArray = givenArray.slice();
  copyGivenArray.splice(index - 1, 1);
  return copyGivenArray;
}

const animals = ["Dog", "Cat", "Lion"];

console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]

//============================================

function removeItem(fruitsArray, numIndex) {
  let copyfruitsArray = fruitsArray.slice();
  copyfruitsArray.splice(numIndex - 1, 1);
  return copyfruitsArray;
}
const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));

console.log(fruits);

//============================================
//03) sumOfCharacters function

function sumOfCharacters(list) {
  let count = 0;
  for (let i = 0; i <= list.length; i++) {
    if (typeof list[i] === "string") {
      count += list[i].length;
    }
  }
  return count;
}

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17
