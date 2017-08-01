function calculateRectangleArea(length, width){
  var response = (length * width);
  if (response <= 0) {
    return undefined;
  }
  else return response;
}

function calculateTriangleArea(base, height){
  var response = (base * height / 2);
  if (response <= 0) {
    return undefined;
  }
  else return response;
}

function calculateCircleArea(radius){
  var response = (Math.PI * (radius * radius));
  if (radius <= -1) {
    return undefined;
  }
  else return response;
}



console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined