/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A (Syntax Error)
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

// Error: Missing closing quote and parenthesis → causes a SYNTAX ERROR
console.log("Welcome to the bootcamp"); // Fixed with closing quote + parenthesis


// Program B (Runtime Error)
// Description:
// This code attempts to multiply each number in an array by 2 and display the results.
// However, it crashes at runtime because "eight" is a string, not a number.

let numbers = [2, 4, 8]; // Fix: replaced "eight" (string) with 8 (number)
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}
// Now it prints: 4, 8, 16


// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a number is prime. 
// However, it returns the opposite result due to incorrect return placement.

// Error: `return true` is inside the loop when a divisor is found, 
// but it should return FALSE in that case (not prime).
// Error: Final `return false` should instead return TRUE (prime number).

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false; // Fixed: number is divisible by something → NOT prime
    }
  }
  return true; // Fixed: if no divisors found, it IS prime
}

console.log(isPrime(7)); // Prints true
console.log(isPrime(10)); // Prints false
