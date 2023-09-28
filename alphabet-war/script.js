"use strict";

function alphabetWar(fight) {
  let score = 0;
  for (const letter of fight) {
    switch (letter) {
      case "w":
        score -= 4;
        break;
      case "p":
        score -= 3;
        break;
      case "b":
        score -= 2;
        break;
      case "s":
        score -= 1;
        break;
      case "m":
        score += 4;
        break;
      case "q":
        score += 3;
        break;
      case "d":
        score += 2;
        break;
      case "z":
        score += 1;
        break;
    }
  }

  return score < 0
    ? "Left side wins!"
    : score > 0
    ? "Right side wins!"
    : "Let's fight again!";
}

console.log(alphabetWar("z")); //=> Right side wins!
console.log(alphabetWar("zdqmwpbs")); //=> Let's fight again!
console.log(alphabetWar("zzzzs")); //=> Right side wins!
console.log(alphabetWar("wwwwwwz")); //=> Left side wins!

/* 
left side 
w - 4
p - 3
b - 2
s - 1 */

/* 
right side
m - 4
q - 3
d - 2
z - 1 */
