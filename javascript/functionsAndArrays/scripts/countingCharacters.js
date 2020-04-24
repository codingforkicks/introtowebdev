function countingCharacters(stringToCount) {
   // The length property has been mentioned in 
   // the Logging Letter Exercise in Lesson 4
   console.log (stringToCount + " has " + 
             stringToCount.length + " characters.");
}
function countingCharacters2(stringToCount, characterToFind) {
   // Let's count the number of times a character appears in a string
   // We will look at each character one-by-one with the help of a for loop
   let characterCount = 0;
   for (let characterPosition = 0; 
          characterPosition < stringToCount.length; 
          characterPosition++){
       if (stringToCount[characterPosition] == characterToFind){
           characterCount++;
       }
   }
   console.log("String to search in: " + stringToCount);
   console.log("Character to find: " + characterToFind);
   console.log("Number of times the character appears: " + 
                 characterCount);
}
// str - string to search 
// search - characters to find in str 
function countingCharacters3(str, search) {    
   let count = 0; // number found
   let numChars = search.length;
   /* we need to stop loop based on multiple characters
example: if searching "Ohio" with 3 characters
at a time we want to stop at h so we do not go
past the end of the string
*/
   let lastIndex = str.length - numChars;
   // Like the last example, we will use a for loop to go through our string
   // This time, we are looking for a series of characters - a substring
   for (let index = 0; index <= lastIndex; index++){
       // substring gets a part of a string from a start to end index
       let current = str.substring(index, index + numChars);
       // if the substring matches our series, increase our counter
       if (current == search){            
           count++;
       }
   }
   return count;
}

//Roll dice
function rollDice(numSides) {
   return Math.floor(Math.random() * numSides) + 1;
}

//Add two numbers
function addTwoNumbers(firstNumber, secondNumber){ 
   return firstNumber + secondNumber;
}

