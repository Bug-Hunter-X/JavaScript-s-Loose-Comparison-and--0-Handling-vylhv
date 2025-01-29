# JavaScript's Loose Comparison and -0 Handling

This repository demonstrates a common yet subtle bug in JavaScript related to loose comparison and the handling of -0.  The `bug.js` file contains a function that incorrectly handles -0, leading to unexpected behavior. The `bugSolution.js` file provides a corrected version.

## Problem

JavaScript's loose comparison (==) does not differentiate between 0 and -0. However, the strict equality operator (===) does.  This difference can cause unexpected issues, particularly in mathematical operations.

The original function in `bug.js` uses a loose comparison (===) to check if either input is 0. This comparison fails to identify -0 resulting in incorrect calculations when -0 is provided as an argument.  This is demonstrated in the test cases.

## Solution

The solution provided in `bugSolution.js` addresses this by using a more robust check that accounts for -0 explicitly.  By employing `Object.is(a, 0) || Object.is(b, 0)` we accurately identify both 0 and -0, ensuring the function behaves correctly in all cases.

## How to Run

1. Clone the repository.
2. Open the `bug.js` and `bugSolution.js` files in a JavaScript environment (e.g., browser console, Node.js).
3. Test the functions with various inputs including 0 and -0 to observe the difference.