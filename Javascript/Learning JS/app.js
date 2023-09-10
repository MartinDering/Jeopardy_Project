


// const school = { 
//     firstName   : 'Sarah',
//     lastName    : 'Smith',
//     exams   : {
//         math : 90,
//         english : 70,
//         history : 80
//     }
//     }

// const avg = (school.exams.math + school.exams.english) / 2;

// const shoppingList = [
//     'apples',
//     'oranges',
//     'bananas',
//     'bread',
//    ['milk', 'eggs', 'almond milk' ],
// ]

// shoppingList['1']


// let programming = {
//     languages: ["JavaScript", "Python", "Ruby"],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: "https://bit.ly/2ysFran"
//   };

// programming.languages.push("GO"); {
//     console.log(programming.languages);
// }
// programming.difficulty = 7; {
//     console.log(programming.difficulty);
// }
// delete programming.jokes; {
//     console.log(programming.jokes);
// }
// programming.isFun = true; {
//     console.log(programming.isFun);
// }

// console.log('Beginning of Loop')
// for(let i = 200; i >= 0 ; i -= 25 ) {
//     console.log(`${i}-${25}`);
//     console.log(i);
//     ;
// }
// console.log('End of Loop');

// const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Purple', 'Pink', 'Black', 'White']

// for(let i = 0; i < colors.length; i++) {
//     console.log(i, colors[i]);
// }

// const board = [
//     [15, 15, 15], //Row 0
//     [15, 15, 15], //Row 1
//     [20, 20, 20], //Row 2
//     [20, 20, 15]  //Row 3
// ]
// let total = 0

// for(let i = 0; i < board.length; i++) {

//     let row = board[i];

//     for(let j = 0; j < row.length; j++) {
// console.log(row[j])
//         total += row[j]
//     }

// }


// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while ( guess !== target) {
//     // console.log(guess);
//     console.log(`Target: ${target} Guess: ${guess}`);
//     guess = Math.floor(Math.random() * 10);
// }

// console.log(`Target: ${target} Guess: ${guess}`);
// console.log(`You Win!`);

// let num = 1;

// while (num <= 20) {
//     console.log(num);
//     num+=2;
// }

// for(let i = 20; i >= num; i-=2) {
//     console.log(i);
// }
// let pick = "";

// for(let i = 0; i <= num; i++) {
//     console.log(i);
// }

// while( num <= 10 ) {
//     console.log(num);
//     num++;
// 
// while(love2 < 50) {
//     console.log(love);
//     love2++;
// }
// function love2() {
//     console.log(`"I love you too"`);
    
// }

// function rollDie() {
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(`Rolling a ${roll}`)
// }

// function throwDie() {
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
// }


// function circle(round){
//     console.log(round * round);
// }


// function wife(love) {
//     for(let give of love){
//         if(
//             give === 'I love you' || give === 'You are amazing!'
//         ){
//             return true;
//         }
//     }
//     return false;
// }


// function difference(a, b) {
//     return a * b;
// }

// }

// const board = [
//     [15, 15, 15], //Row 0
//     [15, 15, 15], //Row 1
//     [20, 20, 20], //Row 2
//     [20, 20, 15]  //Row 3
// ]
// let total = 0

// for(let i = 0; i < board.length; i++) {

//     let row = board[i];

//     for(let j = 0; j < row.length; j++) {
// console.log(row[j])
//         total += row[j]
//     }

// }

// function getDay(day) {
//     if (day < 1 || day > 7) 
//     { 
//         return undefined;
//     }
//     const getDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//     return getDay[day - 1];
// }

// function getArray(array) {
// if (array.length === 0) {
//     return undefined;
// }
// return array[array.length -1];

// }


// function compareNumbers(num1, num2) {
//     if (num1 > num2) {

//     return "First is Greater";

//     } else if (num1 < num2) {

//     return "Second is Greater";

// }   else if (num1 === num2);{
//     return "Both are Equal";
// }
// }

// function counting(word, letter){
//     const lowerCaseWord = word.toLowerCase();
//     const lowerCaseLetter = letter.toLowerCase();
//     let count = 0;
//     for (let i = 0; i < lowerCaseWord.length; i++) {
//     if (lowerCaseWord[i] === lowerCaseLetter) {
//         count++;
//     }
// }
// return `'The count is: ${count}`;
// }


// function letterCount(string) {
//     const count = {};
// for (let i = 0; i < string.length; i++) {
//     const letter = string[i];
//     if (count[letter] === undefined) {
//         count[letter] = 1;
//         }
//     else {
//     count[letter]++;    
//       }
    
//     }
// return count;
// }

// function manipulateArray(array, command, location, value) {
//     if (command === 'remove' && location === 'end'){
//        return array.pop();
//     }
//     else if (command === 'remove' && location === 'beginning'){
//        array.shift();
//        return array
//     }
//     else if (command === 'add' && location === 'beginning') {
//      array.unshift(value);
//      return array;
//     }
//     else if (command === 'add' && location === 'end') {
//          array.push(value);
//          return array;
//     }
//     else {
//         console.log('Invalid input');
//         return array;
//     }
// }
// const myArray = [1, 2, 3, 4];

// function isPalindrome(str) {
//     // Remove whitespace and convert to lowercase
//     const processedStr = str.replace(/\s+/g, '').toLowerCase();
  
//     // Reverse the processed string
//     const reversedStr = processedStr.split('').reverse().join('');
  
//     // Check if the processed string is equal to its reversed version
//     return processedStr === reversedStr;
//   }
  
//   // Example usage
//   console.log(isPalindrome("racecar")); // Output: true
//   console.log(isPalindrome("hello")); // Output: false
//   console.log(isPalindrome("A man a plan a canal Panama")); // Output: true
//   console.log(isPalindrome("Never odd or even")); // Output: true
  

// const hero = 'Martin Dering';

// const person = hero.split('').reverse().join('');

// const reversedName = person.split('').reverse().join('');

// console.log(reversedName); // Returns


// function RPS() {
//     function computerChoice(num) {
//         if (num <= .3) 
//             return "rock";
//         else if (num <= .6) 
//             return "paper";
//         return "scissors";
        
//         }

        
//         let userChoice = prompt("Choose rock / paper, or Scissors").toLowerCase();
//         let computer = computerChoice(Math.random());
        
//         let answers = ["rock", "paper", "scissors"];
        
//         if (!userChoice || answers.indexOf(userChoice) === -1) {
//             return "Please Choose Proper Choice";
//         }

//         if (userChoice === computerChoice) return "Tie!";

//         if (userChoice === 'rock' && computer === "paper") {return "You lose, computer picked " + computer;} 

//         if (userChoice === 'paper' && computer === "scissors") {return "You lose, computer picked " + computer;} 

//         if (userChoice === 'scissors' && computer === "rock") {return "You lose, computer picked " + computer;} 

//         else return "You win, you chose! " + userChoice;
    
//     }
            
// function choice(num) {
//     if (num > 10 || num < 20) {return "outside"};

//     return "inside";

// }

// function key(json) {
//     var obj = JSON.parse(json);
//      const goal = [];
    
//    for (let loop of json){
//         if (typeof loop === 'object' && loop !== null) {
//             for (let keyY in loop) {
//                 if (loop.hasOwnProperty(keyY)) {
//                     const firstKey = keyY.substring(0, keyY.indexOf(':')).trim();
//                     goal.push(firstKey);
//                     break;
//                 }
//              }
//          }  
//     }
//     return goal;
// }
// const custom = [{"a":"1","b":"2","c":"3"}];
// const extracted = keys(custom);
// console.log(extracted)


// function values(json) {
//     // var obj = JSON.parse(json);
//     const goal = [];
//     for (let loop in json) {
//       if (typeof json[loop] !== 'function') {
//         goal.push(json[loop]);
        
//       }
//     }
//     return goal;
// }

// const json = { a: 1, b: 2, c: 3 };
// const objValues = values(json);
// console.log(objValues);

const json = {'a': '1', 'b': '2', 'c': '3'};
const obj = {json};
for (const json in obj) {
    console.log(`${obj[json]}`);
}