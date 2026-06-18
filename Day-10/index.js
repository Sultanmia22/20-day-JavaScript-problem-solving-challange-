/* Day 10 — Algorithms & Problem Solving II
 
Problem 46: Count Words in a Sentence  [Easy]
Description: Write a function wordCount(sentence) that returns an object with each word as a key and its frequency as the value.
Example:
Input: 'the cat sat on the mat'Output: {the: 2, cat: 1, sat: 1, on: 1, mat: 1}
Hint: Split by spaces, then reduce into a frequency object. */

 const wordCount = (sentence) => {
    const words = sentence.split(' ');

    return words.reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});
 }
//  console.log(wordCount('the cat sat on the mat'))
 
 
 
 
/* Problem 47: Longest Word in a Sentence  [Easy]
Description: Write a function longestWord(sentence) that returns the longest word in a sentence. If there's a tie, return the first one.
Example:
Input: 'The quick brown fox'Output: 'quick'
Hint: Split the sentence and use reduce() to track the longest.
 */
  const longestWord = (sentence) => {

        const word = sentence.split(' ')
        
        const result = word.reduce((acc,curr) => {
            if(acc.length < curr.length) {
                return curr
            }
            return acc
        },'')

        return result
  }
 
  console.log(longestWord('The quick brown fox'))
 
 
 
/*  
Problem 48: Rotate an Array  [Medium]
Description: Write a function rotateArray(arr, k) that rotates an array to the right by k steps.
Example:
Input: [1,2,3,4,5], k=2Output: [4,5,1,2,3]
Hint: Use slice and concat, or reverse the whole array then parts. */

 
 const rotateArray =(arr, k) => {
  const n = arr.length;
  if (n === 0) return arr;
  
  k = k % n; 

 
  const endPart = arr.slice(n - k); 
  
  const startPart = arr.slice(0, n - k); 

  
  return endPart.concat(startPart);
}


console.log(rotateArray([1, 2, 3, 4, 5], 2)); 
 
 
 
 
/* Problem 49: Roman to Integer  [Medium]
Description: Write a function romanToInt(s) that converts a Roman numeral string to an integer.
Example:
Input: 'III'   → Output: 3Input: 'IX'    → Output: 9Input: 'LVIII' → Output: 58
Hint: Map each symbol to its value; if a smaller value comes before a larger one, subtract it. */

 
 
 function romanToInt(s) {

  const romanMap = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let total = 0;

  for (let i = 0; i < s.length; i++) {
    const currentVal = romanMap[s[i]];
    const nextVal = romanMap[s[i + 1]];

    if (nextVal && currentVal < nextVal) {
      total -= currentVal;
    } else {
      total += currentVal;
    }
  }

  return total;
}


console.log(romanToInt('III'));   
console.log(romanToInt('IX'));   
console.log(romanToInt('LVIII')); 
console.log(romanToInt('MCMXCIV'));
 
 
/*  
Problem 50: Pascal's Triangle Row  [Medium]
Description: Write a function pascalRow(n) that returns the nth row of Pascal's Triangle as an array.
Example:
Input: 0  → Output: [1]Input: 3  → Output: [1,3,3,1]Input: 4  → Output: [1,4,6,4,1]
Hint: Each element is the sum of the two elements above it from the previous row. */