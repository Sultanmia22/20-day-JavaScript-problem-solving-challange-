// Day 3 — Arrays & Array Methods
 
/* Problem 11: Find the Sum of an Array  [Easy]
Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
Example:
Input: [1, 2, 3, 4, 5]  → Output: 15
Hint: Use reduce() or a for loop. */

const sumArray = (arr) => {
    let totalSum = 0;
    for(let value of arr){
        totalSum+= value;
    }
    return totalSum
};

const result1 = sumArray([1, 2, 3, 4, 5])
// console.log('Total Sum of Array:',result1)
 
 
 
 
 
 
/* Problem 12: Find Maximum Value in Array  [Easy]
Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
Example:
Input: [3, 1, 7, 2, 9]  → Output: 9
Hint: Loop through and track the largest value found. */

 const findMax = (arr) => {
   let maxNumber = 0;

   for(let value of arr){
    if(maxNumber < value){
        maxNumber = value
    }
   }

   return maxNumber;
 }
 
 const result2 = findMax([3, 1, 7, 2, 9,11])
//  console.log('Max Number Of Array:',result2)
 
 
 
/* Problem 13: Remove Duplicates from Array  [Easy]
Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
Example:
Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
Hint: Use Set or filter() with indexOf(). */

const removeDuplicates = (arr) => {
   const uniqueValue = [... new Set(arr)]
   return uniqueValue
}
 
//  console.log(removeDuplicates([1, 2, 2, 3, 3, 4] ))
 
 
/*  
Problem 14: Flatten a Nested Array  [Medium]
Description: Write a function flattenArray(arr) that flattens one level of a nested array.
Example:
Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]
Hint: Use flat() or reduce() with concat(). */

 const flattenArray = (arr) => {
    let result = []
    for(let value of arr){
        console.log(value)
       if(value.isArray){
        console.log('True')
        
       }else{
        console.log('false')
       }
    }
    
 }
 
 console.log(flattenArray([1, [2, 3], [4, 5]]))
 
 
 
/*  
Problem 15: Chunk an Array  [Medium]
Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size.
Example:
Input: [1,2,3,4,5], 2  → Output: [[1,2],[3,4],[5]]
Hint: Use a while loop with slice(). */

const chunkArray = (arr) => {

}
console.log(chunkArray([1,2,3,4,5]))