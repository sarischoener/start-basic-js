"use strict";

// 06) using loops
// 01) oddNumber function

function oddNumbers(num1, num2) {
  let oddNum = ""; // deklarieren --> Variable der ich einen Wert gebe
  if (num1 < 0 || num2 < 0) {
    return "negative numbers not allowed!";
  }
  for (let i = num1; i <= num2; i++) {
    if (i % 2 === 1) {
      oddNum += i + ",";
    }
  }
  return oddNum;
}
console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(-9, 12));
// result should be: 9,11

// 02) charCount function

function charCount(word, filter) {
  let quit = 0;
  if (filter.lengt > 1) {
    return (quit = "to many characters");
  }
  for (let index = 0; index < word.length; index++) {
    const count = word[index]; // man könnte auch nur word[index] ohne const deklarieren
    if (count === filter) {
      quit += 1;
    }
  }
  return quit + " " + filter;
}
// man kann auch eine Variable konvertieren in andere DatenTyp parseInt in andere DatenTyp
