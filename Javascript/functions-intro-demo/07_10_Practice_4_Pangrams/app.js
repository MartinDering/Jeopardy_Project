// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// // isPangram('The five boxing wizards jump quick') //false
// function findTwoLargestNumbers(array) {
//     let largest = -Infinity;
//     let secondLargest = -Infinity;
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] > largest) {
        secondLargest = largest;
        largest = array[i];
      } else if (array[i] > secondLargest && array[i] !== largest) {
        secondLargest = array[i];
      }
    }
  
    // If secondLargest remains -Infinity, it means there was no distinct second largest value
    if (secondLargest === -Infinity) {
      secondLargest = largest;
    }
  
    return [secondLargest, largest];
  
  
  // Example usage:
  const numbers = [3, 1, 2, 2];
  const [largest, secondLargest] = findTwoLargestNumbers(numbers);
  
  console.log("Largest:", largest);  // Output: 3
  console.log("Second Largest:", secondLargest);  // Output: 2
  console.log(secondLargest, largest);


function findLetterIndex(str, index) {
  if (index >= 0 && index < str.length) {
    const letter = str[index];
    return `Letter: ${letter}, Index: ${index}`;
  } else {
    return "Invalid index";
  }
}