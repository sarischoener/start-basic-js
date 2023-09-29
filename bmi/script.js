"use strict";

function bmi(weight, height) {
  // bodymas ausgerechnet
  const result = weight / (height * height);

  if (result <= 18.5) {
    return "Underweight";
  }

  if (result <= 25.0) {
    return "Normal";
  }

  if (result <= 30.0) {
    return "Obese";
  }
}

console.log(bmi(90, 150));

/* https://www.codewars.com/kata/57a429e253ba3381850000fb */
