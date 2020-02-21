
const numbers = [1, 2, 3, 4]; 

const output = except(numbers, [1, 2]);

console.log(output); 

function except(array, excluded) {
  // write your code here
}

/* 
Instructions:
Create a function that when given an array as the first argument (X),
and another array as the second argument (Z), returns an array
similar to X but without values contained in Z

Input: [1,2,3,4], [1,2]
Output: [3,4]

Input: [1,2,3,4,5], [1,4]
Output: [2,3,5]
*/