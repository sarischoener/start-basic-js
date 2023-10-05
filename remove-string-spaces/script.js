"use strict";

/* Write a function that removes the spaces from the string, then return the resultant string.

Examples:

Input -> Output
"8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
"8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
"8aaaaa dddd r     " -> "8aaaaaddddr"
 */

const stringWithSpaces = function (str) {
  return str.replaceAll(" ", "", "  "); // YUHUUU
};

console.log(stringWithSpaces("8 j 8   mBliB8g  imjB8B8  jl  B"));
console.log(stringWithSpaces("8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd"));
console.log(stringWithSpaces("8aaaaa dddd r     "));

// ====================Lösung mit split & join======================

// function noSpace(x){return x.split(' ').join('')}

//====================Lösung die ich nicht verstehe!?================

/* const noSpace = x => x.replace(/ /g, ""); */

// was bedeutet das g? g für Gap? --> , bedeutet anstatt "" = kein space
