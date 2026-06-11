/* Day 4 — Objects & Loops */
 
/* Problem 16: Count Object Properties  [Easy]
Description: Write a function countProperties(obj) that returns the number of properties in an object.
Example:
Input: {a: 1, b: 2, c: 3}  → Output: 3
Hint: Use Object.keys().length. */

const countProperties = (obj) => {
    let totalNum = 0
   for(let value in obj){
    totalNum+=1;
   }
   return totalNum
}
//  console.log(countProperties({a: 1, b: 2, c: 3,d:5}))
 
 
 
 
 
/* Problem 17: Merge Two Objects  [Easy]
Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
Example:
Input: {a:1}, {b:2}  → Output: {a:1, b:2}
Hint: Use the spread operator or Object.assign(). */

 const mergeObjects = (obj1,obj2) => {
    const result = {...obj1,...obj2}
    return result
 }
 
//  console.log(mergeObjects({a:1}, {b:2}))
 
 
 
/* Problem 18: FizzBuzz  [Easy]
Description: Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of both print 'FizzBuzz'.
Example:
Input: 15 output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
Hint: Check divisibility with the % operator in the right order. */

const fizzBuzz = (n) => {
    for(let i =1; i <= n ; i++){
        if(i % 3 == 0){
            console.log('Fizz')
        }
        else if(i % 5 == 0){
            console.log('Buzz')
        }
        else {
            console.log(i)
        }
    }
}
 
fizzBuzz(15)
 
 
 
 
/* Problem 19: Invert an Object  [Easy]
Description: Write a function invertObject(obj) that swaps the keys and values of an object.
Example:
Input: {a: 1, b: 2}  → Output: {1: 'a', 2: 'b'}
Hint: Use Object.entries() and reduce(). */

const invertObject = (obj) => {
    
    const entriesVal = Object.entries(obj);

    const result = entriesVal.reduce((acc,[key,val]) => {
        acc[val] = key
        return acc
    },{})

    return result
    
}
 console.log(invertObject({a: 1, b: 2}))
 
 
 
 
 
/* Problem 20: Find Duplicate Values in Array of Objects  [Medium]
Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
Example:
Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}]Output: ['Ali']
Hint: Use a frequency map (object) to count occurrences. */

const findDuplicateNames = (arr) => {
    const counts = arr.reduce((acc,{name}) => {
        acc[name] = (acc[name] || 0) + 1
        return acc
    },{})

    const x = Object.keys(counts)

    console.log(x)
}

console.log(findDuplicateNames([{name:'Ali'},{name:'Sara'},{name:'Ali'}]))