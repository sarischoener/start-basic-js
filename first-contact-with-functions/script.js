
"use strict";

// 01) Greet function
// TODO: implement welcomeMsg function

function welcomeMsg() {
  return "Welcome Jane!";
}

console.log(welcomeMsg("Jane")); //Warum "Jane" oder "Marc" bei console.log ?

function welcomeMsg() {
  return "Welcome Marc!";
}
console.log(welcomeMsg("Marc")); //Wird die Funktion überschrieben ?

 02) Gross Price Function
// TODO: implement calcGrossPrice function
function calcGrossPrice(basePrice, taxRate) {
  return basePrice * taxRate + basePrice; 
}
console.log(calcGrossPrice(20, 0.19));
// result should be 23.8

//----------------------------------------------

function calcGrossPrice(a, b) {
  return a * b + b; //????
}
add(0.16, 40);

console.log(calcGrossPrice(40, 0.16));
// result should be 46.4


//---------------------------------------------
//03) Add Positive Function
function addPositive(numA, numB) {
  return Math.abs(numA) + Math.abs(numB);
}
console.log(addPositive(2, 3));
// result1 should be 5


let userName = "Brad";
userName = "Jenna";

function getUserNameLength (name) {
    return let 
}