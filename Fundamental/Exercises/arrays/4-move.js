
const numbers = [1, 2, 3, 4]; 

const output = move(numbers, 1, 2);

console.log(output); 

function move(array, index, offset) { 
  // write your code here
}

/*
Instructions:
Create a function that receives 3 arguments (A, I, N).
When executed, this function switches values between the value of
A[I] and A[I+N]. Throw errors when the function is given invalid
arguments

Input: [1,2,3,4], 1, 2
Output: [1,4,3,2]

Input: [5,6,7,8,9], 2, 3
Output: "Invalid offset"

Input: [1,2,3,4,5], -1, 2
Output: "Invalid index"
*/