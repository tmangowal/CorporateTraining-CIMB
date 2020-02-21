
const array = [0, null, undefined, '', 2, 3];

console.log(countTruthy(array));

function countTruthy(array) {
  // write your code here
}

/*
Instructions:
Create a function that accepts an array (a) as an argument.
Return the count of values that has Truthy values.

Input: [0, null, undefined, '', 2, 3]
Output: 2

Input [0, null, ""]
Output: 0
*/