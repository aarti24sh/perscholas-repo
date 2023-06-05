/*const nums = [1, 2, 3, 4, 6, 0 , 7, 8, 25, 9, 10, 2, 35, -1 , -9];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];
let isTrue = false;
//Determine if every number is greater than or equal to 0
isTrue = nums.every(num => num > 0);
console.log(isTrue ? 'Every number is greater than or equal to zero' : 'All numbers are not greater than or equal to 0');

//Determine if every word shorter than 8 characters.
isTrue = panagram.every(word => word.length < 8);
console.log(isTrue ? 'All words are shorter than 8 characters' : 'All words are not shorter than 8 characters');

//Filter the array for numbers less than 4
var result = nums.filter(num => num < 4);
console.log(`Numbers less than 4 in the array : ${result}`);

//Filter words that have an even length
var result = panagram.filter(word => word.length % 2 == 0);
console.log(`Words that have an even length : ${result}`);

//Find the first value divisible by 5
var result = nums.find(num => num % 5 == 0 && num != 0);
console.log(`First value divisible by 5 : ${result}`);

//Find the first word that is longer than 5 characters
var result = panagram.find(word => word.length > 5);
if (result == undefined)
    console.log('No words greater than 5 characters');
else
    console.log(`First word longer than 5 characters : ${result}`);

//Find the index of the first number that is divisible by 3
const firstNumDivisibleByThree = (num) => num % 3 == 0;
console.log(`The index of the first number divisible by 3 is : ${nums.findIndex(firstNumDivisibleByThree)}`);

//Find the index of the first word that is less than 2 characters long.
const firstWordLessThan2Chars = (word) => word.length < 2;

if (panagram.findIndex(firstWordLessThan2Chars) == -1)
    console.log("No word less than 2 characters found!");
else
    console.log(`The index of the first word that is less than 2 characters is ${panagram.findIndex(firstWordLessThan2Chars)}`);

//Log each value of the array multiplied by 3
nums.forEach(num => console.log(num*3));

//Log each word with an exclamation point at the end of it
panagram.forEach(word => console.log(word+"!"));

// panagram.forEach(function (word) {
//     console.log(word+"!");
// });

//Find out if some numbers are divisible by 7
var result = nums.some(num => num % 7 == 0);
if (result === true)
    console.log("At least one number is divisible by 7");
else
    console.log("No numbers are divisible by 7");

//Find out if some words have the letter a in them
var result = panagram.some(word => word.indexOf('a') != -1);
if (result === true)
    console.log("At least one word has an a in it");
else
    console.log("No words have the letter a in it");*/