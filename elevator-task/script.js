// Write a function
// 1. Ausrechnen Abstand call zu left
// 2. Ausrechnen Abstand call zu right
// 3. Vergleichen der Abstände
// 4. Ausgabe elevator left or right

// Wenn distance left zu call kleiner als right zu call: return left
// Wenn distance right zu call kleiner/gleich left zu call: return right

function elevator(left, right, call) {
  const distanceLeft = Math.abs(call - left);
  const distanceRight = Math.abs(call - right);

  if (distanceLeft < distanceRight) {
    return "left";
  }

  if (distanceLeft >= distanceRight) {
    return "right";
  }
}

console.log(elevator(0, 1, 0));
console.log(elevator(0, 1, 1));
console.log(elevator(0, 1, 2));
console.log(elevator(0, 0, 0));
console.log(elevator(0, 2, 1));

/* elevator(0, 1, 0); // => "left"
    elevator(0, 1, 1); // => "right"
    elevator(0, 1, 2); // => "right"
    elevator(0, 0, 0); // => "right"
    elevator(0, 2, 1); // => "right" */
