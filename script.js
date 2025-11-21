// 1. Reverse a String
// Problem: Write a function that takes a string as an argument and returns the string reversed.
// Example:
// Input: "javascript"
// Output: "tpircsavaj"
function stringReverser(orgString) {
    let strLength = orgString.length;
    let newString = "";

    for (let i = strLength - 1; i >= 0; i--) {
        newString = newString + orgString[i];
    }

    return newString;
}
//testing
//console.log(stringReverser("Hello world"))
//dlrow olleH

// --------------------------------------------------------------------------------------------------------------------------------------//

// 2. Palindrome Check
// Problem: Write a function that checks if a given string is a palindrome (reads the same forwards and backward). It should return true if it is a palindrome and false if it is not.
// Example:
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false
function isPalindrome(myString) {
    let checkValue = true;
    let strLength = myString.length;

    for (let i = 0; i < strLength / 2; i++) {
        if (myString[i] != myString[strLength - 1 - i]) {
            return false;
        }
    }

    return checkValue;
}
//testing
//> console.log(isPalindrome("madam"))
// true
//> console.log(isPalindrome("mada"))
//false

// --------------------------------------------------------------------------------------------------------------------------------------//

// 3. Find the Maximum Number in an Array
// Problem: Write a function that takes an array of numbers and returns the largest number in it.
// Example:
// Input: [1, 5, 3, 9, 2]
// Output: 9
function findMaxNum(myArray) {
    let arrayLength = myArray.length;
    let maxNumber = myArray[0];

    for (let i = 0; i < arrayLength; i++)
        if (myArray[i] > maxNumber)
            maxNumber = myArray[i];

    return maxNumber;
}
//testing
//> console.log(findMaxNum([11,22,33,44,55,66,77,88,99]))
// 99

// --------------------------------------------------------------------------------------------------------------------------------------//

// 4. Factorial Calculation
// Problem: Write a function that calculates the factorial of a given number. (The factorial of 5 is 5 * 4 * 3 * 2 * 1).
// Example:
// Input: 5
// Output: 120
function calcFactorial(num) {
    let factOfNum = 1;

    if (num === 0 || num === 1) {
        return factOfNum;
    }

    else
        for (let i = num; i > 0; i--)
            factOfNum = factOfNum * i;

    return factOfNum;
}
//testing
//> console.log(calcFactorial(10))
// 3628800
//> console.log(calcFactorial(0))
// 1

// --------------------------------------------------------------------------------------------------------------------------------------//

// 5. Prime Number Check
// Problem: Write a function that takes aninteger num and checks if it is a prime number. A prime number is a
// natural number greater than 1 that has no positive divisors other than
// 1 and itself. The function should return true if the number is prime and false otherwise.
// Example:
// Input: 7
// Output: true
// Input: 10
// Output: false (because it's divisible by 2 and 5)
function isPrime(num) {
    // edge cases
    if (num === 0 || num === 1) {
        return false; // 0 and 1 are not prime numbers
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
//testing
//> console.log(isPrime(7))
// true
//> console.log(isPrime(10))
// false

// --------------------------------------------------------------------------------------------------------------------------------------//

// 6. Remove Duplicates from an Array
// Problem: Write a function that takes an array and returns a new array containing only the unique elements (no duplicates).
// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]
function removeDuplicates(myArray) {
    let arrayLength = myArray.length;
    let uniqueArray = [];

    for (let i = 0; i < arrayLength; i++) {
        let found = false;

        for (let j = 0; j < uniqueArray.length; j++) {
            if (myArray[i] === myArray[j]) {
                found = true;
                break;
            }
        }

        if (!found) {
            uniqueArray[uniqueArray.length] = myArray[i];
        }
    }

    return uniqueArray;
}
//testing
//> console.log(removeDuplicates([1,1,2,3,4,5,5,5,6,7,8,9]))
/* [
  1, 2, 3, 4, 5,
  5, 6, 7, 8, 9
]
*/
// --------------------------------------------------------------------------------------------------------------------------------------//

// 7. Find the Missing Number in a Sequence
// Problem: You are given an array containing 99 unique numbers whose values range from 1 to 100. Write a function to find the missing number.
// Example:
// Input: An array containing all numbers from 1 to 100 except for the number 55.
// Output: 55
function findMissingNum(myArray) {
    let arrayLength = myArray.length;

    for (let i = 1; i < arrayLength; i++)
        if (myArray[i] != myArray[i - 1] + 1)
            return myArray[i - 1] + 1;

    return "no missing number";
}
//testing
//> console.log(findMissingNum([1,2,3,4,5,6,7,8,9,11]))
//10
//> console.log(findMissingNum([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100]))
//33

// --------------------------------------------------------------------------------------------------------------------------------------//

// 8. Capitalize the First Letter of Each Word
// Problem: Write a function that takes a sentence and returns a new sentence with the first letter of each word capitalized.
// Example:
// Input: "hello world from javascript"
// Output: "Hello World From Javascript"
function transToCapitalize(myString) {
    let newString = "";
    let stringLength = myString.length;

    for (let i = 0; i < stringLength; i++) {
        // Capitalize if it's the first character OR the previous character is a space
        if (i === 0 || myString[i - 1] === " ") {
            newString += myString[i].toUpperCase();
        } else {
            newString += myString[i];
        }
    }

    return newString;
}
//test
//> console.log(transToCapitalize("hello i am javascript language"))
//Hello I Am Javascript Language


// --------------------------------------------------------------------------------------------------------------------------------------//

// 9. Anagram Check
// Problem: Write a function to check if two strings are anagrams of each other (contain the same characters with the same frequency).
// Example:
// Input: "listen", "silent"
// Output: true
// Input: "hello", "world"
// Output: false
function isAnagram(stringA, stringB) {
    let lengthOfA = stringA.length;
    let lengthOfB = stringB.length;
    let usedAscii = [];

    // checking if the arrays have the same length
    if (lengthOfA != lengthOfB)
        return false;

    let countA = [];
    let countB = [];


    //frequencies arrays
    for (let i = 0; i < 256; i++) {
        countA[i] = 0;
        countB[i] = 0;
    }

    // count the frequencies for each character
    for (let i = 0; i < lengthOfA; i++) {
        countA[stringA.charCodeAt(i)]++;
        countB[stringB.charCodeAt(i)]++;
    }

    //checking frequencies
    for (let i = 0; i < 256; i++)
        if (countA[i] !== countB[i]) {
            return false;
        }


    return true;
}
//test
//> console.log(isAnagram("silent","listen"))
//true
//> console.log(isAnagram("silent","listenen"))
//false

// --------------------------------------------------------------------------------------------------------------------------------------//

// 10. Chunk an Array
// Problem: Write a function that takes an array and a size number, and splits the array into subarrays of the specified size.
// Example:
// Input: [1, 2, 3, 4, 5, 6, 7], 3
// Output: [[1, 2, 3], [4, 5, 6], [7]]
function chunkArray(myArray, size) {
    let arrayLength = myArray.length;
    let chunkedArray = [];
    let index = 0;

    for (let i = 0; i <= arrayLength; i = i + size) {
        chunkedArray[index] = [];
        for (let j = 0; j < size && (i + j) < arrayLength; j++)
            chunkedArray[index][j] = myArray[i + j];

        index++;
    }

    return chunkedArray;
}
//test
//> console.log(chunkArray([1, 2, 3, 4, 5, 6, 7,8,9,10], 2))
//[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ], [ 9, 10 ], [] ]

// --------------------------------------------------------------------------------------------------------------------------------------//

// 11. Find a Pair of Numbers that Sum to a Target Value
// Problem: Write a function that takes an array of numbers and a target number, and returns the first pair of numbers from the array that sum up to the target.
// Example:
// Input: [10, 5, 2, 7, 8, 3], 10
// Output: [2, 8]
function getSumOfPair(myArray, target) {
    let arrayLength = myArray.length;

    for (let i = 0; i < arrayLength; i++)
        for (let j = i + 1; j < arrayLength; j++)
            if (myArray[i] + myArray[j] === target)
                return [myArray[i], myArray[j]];

    return false;
}
//test
//> console.log(getSumOfPair([0,1,2,3,4,5,6,7,8,9,10],10))
//[0,10]

// --------------------------------------------------------------------------------------------------------------------------------------//

// 12. Rotate an Array to the Left
// Problem: Write a function that takes an array and a number n, and rotates the array elements to the left by n positions.
// Example:
// Input: [1, 2, 3, 4, 5], 2
// Output: [3, 4, 5, 1, 2]
function rotateToLeft(myArray, rotation) {
    let arrayLength = myArray.length;
    let newArray = [];

    for (let i = 0; i < myArray.length; i++) {
        newArray[i] = myArray[(i + rotation) % arrayLength];
    }

    return newArray;
}
//test
//> console.log(rotateToLeft([0,1,2,3,4,5,6,7,8,9,10],2))
//[0,10]
/* [
  2, 3, 4,  5, 6,
  7, 8, 9, 10, 0,
  1
]
*/

// --------------------------------------------------------------------------------------------------------------------------------------//

// 13. Find the Intersection of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing only the elements
// that are common to both arrays (the intersection).
// Example:
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]
function findIntersection(arrayA, arrayB) {
    let lengthOfA = arrayA.length;
    let lengthOfB = arrayB.length;
    let intersection = [];
    let index = 0;

    for (let i = 0; i < lengthOfA; i++)
        for (let j = 0; j < lengthOfB; j++)
            if (arrayA[i] === arrayB[j]) {
                intersection[index] = arrayA[i];
                index++;
                break;
            }

    return intersection;
}
//test
//> console.log(findIntersection([1,2,3,4],[3,4,5,6]))
//[ 3, 4 ]

// --------------------------------------------------------------------------------------------------------------------------------------//

// 14. Count Character Frequency in a String
// Problem: Write a function that takes a string and returns an object representing a frequency map,
// where each key is a character and its value is the number of times it appears.
// Example:
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }
function charFrequency(str) {
    let stringLength = str.length;
    let frequencyMap = {};

    for (let i = 0; i < stringLength; i++) {
        let char = str[i];

        if (frequencyMap[char])
            frequencyMap[char]++;
        else
            frequencyMap[char] = 1;
    }
    return frequencyMap;
}
//test
//> console.log(charFrequency("hello"))
//{ h: 1, e: 1, l: 2, o: 1 }

// --------------------------------------------------------------------------------------------------------------------------------------//

// 15. Flatten a Nested Array
// Problem: Write a function that flattens a nested array (an array containing elements that
// may themselves be arrays) into a single, flat array.
// Example:
// Input: [1, [2, 3], [4, [5, 6]]]
// Output: [1, 2, 3, 4, 5, 6]
function flattenArray(myArray) {
    let arrayLength = myArray.length;
    let flatArray = [];
    let subArray = [];

    for (let i = 0; i < arrayLength; i++)
        if (myArray[i] > 1) {
            subArray = myArray[i];
            for (let j = i; j < subArray.length; j++)
                flatArray[j] = subArray[j];
        }
        else
            flatArray[i] = myArray[i];

    return flatArray;
}
//test
//> console.log(flattenArray([1, [2, 3], [4, [5, 6]]]))
// [1, [2, 3], [4, [5, 6]]]

// --------------------------------------------------------------------------------------------------------------------------------------//

// 16. Find the Longest Word in a Sentence
// Problem: Write a function that takes a sentence and returns the longest word in it. If there are multiple words with the same maximum length, return the first one that appears.
// Example:
// Input: "The quick brown fox jumped over the lazy dog"
// Output: "jumped
function getLongestWord(str) {
    let strLength = str.length;
    let longestWord = "";
    let currentWord = "";

    for (let i = 0; i < strLength; i++) {
        if (str[i] !== ' ') {
            currentWord = currentWord + str[i];
        } else {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = "";
        }
    }

    if (currentWord.length > longestWord.length) {
        longestWord = currentWord;
    }

    return longestWord;
}
//test
//> console.log(getLongestWord("The quick brown fox jumped over the lazy dog"))
//jumped

// --------------------------------------------------------------------------------------------------------------------------------------//

// 17. Find the Most Frequent Element in an Array
// Problem: Write a function that takes an array of numbers or strings and returns the most frequently occurring element.

// Example:
// Input: [1, 2, 3, 2, 2, 4, 5, 2]
// Output: 2
// Input: ['a', 'b', 'c', 'a', 'b', 'a']
// Output: 'a'
function getMostFrequent(myArray) {
    let arrayLength = myArray.length;
    let uniqueElements = [];
    let frequencies = [];

    for (let i = 0; i < arrayLength; i++) {
        let excist = false;

        //checking if the element is excist
        for (let j = 0; j < uniqueElements.length; j++) {
            if (myArray[i] === uniqueElements[j]) {
                frequencies[j]++;
                excist = true;
                break;
            }
        }

        //if the element is not excist
        if (!excist) {
            uniqueElements[uniqueElements.length] = myArray[i];
            frequencies[frequencies.length] = 1;
        }
    }

    //finding the most frequent
    let mostFrequent = frequencies[0];
    let maxElement = uniqueElements[0];

    for (let k = 1; k < frequencies.length; k++) {
        if (frequencies[k] > mostFrequent) {
            mostFrequent = frequencies[k];
            maxElement = uniqueElements[k];
        }
    }

    return maxElement;
}
//test
//> console.log(getMostFrequent([1, 2, 3, 2, 2, 4, 5, 2]))
//2

// --------------------------------------------------------------------------------------------------------------------------------------//

// 18. Sort an Array of Objects by a Property
// Problem: You have an array of objects, where each object represents a person with a name and age.
// Write a function to sort the array by age in ascending order (from youngest to oldest) without using Array.prototype.sort.
// Example:
// Input: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }]
// Output: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]
// Solution: (Using Bubble Sort algorithm)
function sortUsingBubble(myArray) {
    let arrayLength = myArray.length;
    let swapped;

    // Bubble Sort
    do {
        swapped = false;
        for (let i = 0; i < arrayLength - 1; i++) {
            if (myArray[i].age > myArray[i + 1].age) {

                let temp = myArray[i];
                myArray[i] = myArray[i + 1];
                myArray[i + 1] = temp;
                swapped = true;
            }
        }
        arrayLength--;
    } while (swapped);

    return myArray;
}
//test
//> console.log(sortUsingBubble([{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }]))
/*[
  { name: 'Bob', age: 25 },
  { name: 'Alice', age: 30 },
  { name: 'Charlie', age: 35 }
]
*/

// --------------------------------------------------------------------------------------------------------------------------------------//

// 19. Find the First Non-Repeating Character
// Problem: Write a function that takes a string and finds the first character that does not repeat.
// Example:
// Input: "swiss"
// Output: "w"
// Input: "aabbcc"
// Output: null (or a suitable message)
function getFirstUniqueChar(str) {
    let strLength = str.length;
    let frequencies = [];

    //ascii length = 256
    for (let i = 0; i < 256; i++) {
        frequencies[i] = 0;
    }

    // count frequencies
    for (let i = 0; i < strLength; i++) {
        let charToAscii = str.charCodeAt(i);
        frequencies[charToAscii]++;
    }

    for (let i = 0; i < strLength; i++) {
        let charToAscii = str.charCodeAt(i);
        if (frequencies[charToAscii] === 1) {
            return str[i];
        }
    }

    return null;
}
//test
//> console.log(getFirstUniqueChar("swiss"))
//w

// --------------------------------------------------------------------------------------------------------------------------------------//

// 20. Symmetric Difference of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing the elements that
// are present in one of the arrays, but not in both.
// Example:
// Input: [1, 2, 3], [3, 4, 5]
// Output: [1, 2, 4, 5]
function getUnique(arrayA, arrayB) {
    let lengthOfA = arrayA.length;
    let lengthOfB = arrayB.length;
    let uniqueArray = []

    //first, merging the two arrays in one array
    let mergedArray = [];
    let index = 0;


    // adding arrayA
    for (let i = 0; i < lengthOfA; i++) {
        mergedArray[index] = arrayA[i];
        index++;
    }

    // // adding arrayB
    for (let j = 0; j < lengthOfB; j++) {
        mergedArray[index] = arrayB[j];
        index++;
    }

    //second, using map, calculating the frequencies for each element
    let frequencies = {};

    for (let i = 0; i < (lengthOfA + lengthOfB); i++) {
        let element = mergedArray[i];

        if (frequencies[element] !== undefined) {
            frequencies[element] = frequencies[element] + 1;
        } else {
            frequencies[element] = 1;
        }
    }

    //finally, getting values=1 from frequencies
    let j = 0;
    for (let key in frequencies) {
        if (frequencies[key] === 1) {
            uniqueArray[j] = key;
            j++
        }
    }


    return uniqueArray;
}
//testing
//> console.log(getUnique([1,2,3,4],[3,4,5,6]))
//[ '1', '2', '5', '6' ]



