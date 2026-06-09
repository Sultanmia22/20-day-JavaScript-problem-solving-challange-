/*  Problem 1: Swap Two Variables  [Easy]
Description: Write a function that swaps the values of two variables without using a third variable.
Example:
Input: a = 5, b = 10 Output: a = 10, b = 5
Hint: Try using destructuring or arithmetic operators. */

const SwapVariable = (a,b) => {
    [a,b] = [b,a]
    return [a,b]
};

const result = SwapVariable(5,10)
console.log(result)

/* Problem 2: Check Even or Odd  [Easy]
Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
Example:
Input: 4  → Output: trueInput: 7  → Output: false
Hint: Use the modulus (%) operator. */

const checkEven = (value) => {
 if(value % 2 === 0){
    return true
 }
 else{
    return false
 }
}

const result2 = checkEven(7)

console.log('Result2:',result2)


/* Problem 3: Find the Largest of Three Numbers  [Easy]
Description: Write a function largest(a, b, c) that returns the largest of three numbers.
Example:
Input: 3, 7, 5  → Output: 7
Hint: Use Math.max() or if-else conditions. */

const findLargeNumber = (a,b,c) => {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

const result3 = findLargeNumber(4,2,6)

console.log('The Large Number:',result3)


/* Problem 4: Celsius to Fahrenheit  [Easy]
Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
Example:
Input: 0   → Output: 32 Input: 100 → Output: 212
Hint: Formula: (C × 9/5) + 32 */

const toFahrenheit = (value) => {
    return (value * 9 / 5) + 32;
}

const result4 = toFahrenheit(0)

console.log('Result4:',result4)


/* Problem 5: Check Positive, Negative or Zero  [Easy]
Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
Example:
Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
Hint: Use if-else if-else statements. */

const checkSign = (num) => {
    if(num > 0){
        return 'Positive'
    }
    else if(num < 0){
        return 'Negative';
    }
    else{
        return 'Zero'
    }
}

const result5 = checkSign(0)

console.log('Result5:',result5)