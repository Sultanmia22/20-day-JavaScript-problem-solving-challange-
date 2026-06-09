/* Problem 6: Reverse a String  [Easy]
Description: Write a function reverseString(str) that returns the reverse of a given string.
Example:
Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
Hint: Use split(''), reverse(), and join('').
 */
 
 const reverseString = (str) => {
    const splitStr = str.split('').reverse().join('')
    return splitStr
 }
 
 const problem1 = reverseString('hello') 

//  console.log('Problem1:',problem1)
 
 
/* Problem 7: Count Vowels in a String  [Easy]
Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
Example:
Input: 'hello'   → Output: 2Input: 'javascript' → Output: 3
Hint: Use a loop or match() with a regular expression. */

 const countVowels = (str) => {
    const vowels = 'aeiou'
    const splitStr = str.split('')

    let totalVowels = 0

    for(let letter of splitStr){
       if(vowels.includes(letter)){
        totalVowels = totalVowels + 1;
       }
    }

    return totalVowels
 }
 
 const problem2 = countVowels('javaScript')

//  console.log(problem2)
 
 
 
 
/* Problem 8: Check Palindrome  [Easy]
Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
Example:
Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
Hint: Compare the string to its reverse. */

 
 
 const isPalindrome = (str) => {
    const reversStr = str.split('').reverse().join('')

    if(reversStr === str){
        return true
    }
    else{
        return false
    }
 }
 
 const problem3 = isPalindrome ('hello')

 console.log(problem3)
 
/*  
Problem 9: Capitalize First Letter of Each Word  [Easy]
Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
Example:
Input: 'hello world'  → Output: 'Hello World'
Hint: Use split(' '), map(), and join(' '). */

 const titleCase = (str) => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const problem4 = titleCase('hello world');

console.log('Problem 4:', problem4);
 
 
/* Problem 10: Count Occurrences of a Character  [Easy]
Description: Write a function countChar(str, char) that returns how many times a character appears in a string.
Example:
Input: 'banana', 'a'  → Output: 3
Hint: Use split(char).length - 1 or a loop. */

const countChar = (str, char) => {
  return str.split(char).length - 1;
};

const result = countChar('banana', 'a');

console.log('Problem 10:', result);