"use strict";
/* 
Introduction
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.

Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.

The left side letters and their power:

 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:

 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.
 */

function alphabetWar(battlestring) {
  let leftPoints = 0;
  let rightPoints = 0;
  const teamLeft = ["w", "p", "b", "s"];
  const teamRight = ["m", "q"];
  return "Let's fight again!";
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

// =============Test Sari========================
//1) Variablen vergeben Team Left, Team Right, No Team --> const
//2)

/*

function alphabetWar(fight){
  var right = {}
  right['m'] = 4
  right['q'] = 3
  right['d'] = 2
  right['z'] = 1
  var left = {}
  left['w'] = 4
  left['p'] = 3
  left['b'] = 2
  left['s'] = 1

  var sumRight = 0
  var sumLeft = 0

  for(i in fight){
    if(right[fight[i]]){sumRight += right[fight[i]]}
    if(left[fight[i]]){sumLeft += left[fight[i]]}
  }
  if(sumRight>sumLeft){return 'Right side wins!'}
  if(sumRight<sumLeft){return 'Left side wins!'}
  return "Let's fight again!";
}
*/
//======================================================================

// Volkers Lösung
/*function alphabetWar(fight) {
  let scoreLeft = 0;
  let scoreRight = 0;

  // const fight = fight.split("");

  //   return battlestring;

   for (let i = 0; i < fight.length; i++) {
    if (fight[i] === "w") {
      scoreLeft += 4;
    } else if (fight[i] === "p") {
      scoreLeft += 3;
    } else if (fight[i] === "b") {
      scoreLeft += 2;
    } else if (fight[i] === "s") {
      scoreLeft += 1;
    } else if (fight[i] === "m") {
      scoreRight += 4;
    } else if (fight[i] === "q") {
      scoreRight += 3;
    } else if (fight[i] === "d") {
      scoreRight += 2;
    } else if (fight[i] === "z") {
      scoreRight += 1;
    }
  }
  //   return [scoreLeft, scoreRight];
  if (scoreLeft > scoreRight) {
    return "Left side wins!";
  } else if (scoreLeft < scoreRight) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}

console.log(alphabetWar("z"));

console.log(alphabetWar("zdqmwpbs"));

console.log(alphabetWar("zzzzs"));

console.log(alphabetWar("wwwwww")); */

//=====================================================
// Joes Lösung

("use strict");

function alphabetWar(fight) {
  const leftSide = [
    ["w", 4],
    ["p", 3],
    ["b", 2],
    ["s", 1],
  ];

  const rightSide = [
    ["m", 4],
    ["q", 3],
    ["d", 2],
    ["z", 1],
  ];

  let countLeft = 0;
  let countRight = 0;

  // Check ob Großbuchstaben
  if (fight.toLowerCase() !== fight) {
    return "Let's fight again!";
  }

  for (let i = 0; i < fight.length; i++) {
    const currentChar = fight[i];

    for (let index = 0; index < leftSide.length; index++) {
      const currentLeftChar = leftSide[index][0];
      const currentLeftValue = leftSide[index][1];

      if (currentChar === currentLeftChar) {
        countLeft += currentLeftValue;
      }
    }

    for (let index = 0; index < rightSide.length; index++) {
      const currentLeftChar = rightSide[index][0];
      const currentLeftValue = rightSide[index][1];

      if (currentChar === currentLeftChar) {
        countRight += currentLeftValue;
      }
    }
  }

  // if Abfrage ob left größer ist
  if (countLeft > countRight) {
    return "Left side wins!";
  } else if (countLeft < countRight) {
    return "Right side wins!";
  }

  return "Let's fight again!";
}

//console.log(alphabetWar("abnZkP"));
console.log(alphabetWar("abnzkp"));
