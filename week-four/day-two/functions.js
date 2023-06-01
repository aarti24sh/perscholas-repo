/*Define a function, as a function declaration,
 maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. 
 If they are the same, return that number.
 Use the if...else construct or a ternary expression
 the Math.max method is not allowed.*/

 //Solution
 /*function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log(maxOfTwoNumbers(3, 9));*/

 // Challenge
 /*Define a function, 
 as a function expression, maxOfThree that takes three numbers
as arguments and returns the largest of them. Again, the Math.
 max method is not allowed.*/
 //solution

 /*const maxOfThree = function(val1,val2,val3){
    if ((val1>=val2)&&(val1>=val3)){
        return val1;
    }else if ((val2>=val1)&&(val2>=val3)){
        return val2;
    }else{
        return val3;
    }
    
 }
 console.log(maxOfThree(8,1,3));*/

 //challenge:
 /*Define a function, as a function declaration
 , isCharAVowel that takes a character as an 
 argument and returns true if it is a vowel, false otherwise.*/
 //solution:

 /*function isCharAVowel(char) {
    if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
        return true;
    } 
    else
        return false;
 }

 let retValue = isCharAVowel('y')

console.log(retValue);*/

//challenge
/*Define a function, as a function expression,
sumArray that takes an array of numbers and returns the sum of those numbers.
For example, sumArray([2, 4, 5]); would return 11*/
//solution:

/*const sumArray = function(num1,num2,num3,num4,num5){
    return num1+num2+num3+num4+num5;
}
console.log(sumArray(8,9,4,2,6));*/
//challenge
/*Define a function, as a function declaration,
 multiplyArray that takes an array of numbers and returns the product of those numbers. 
For example, multiplyArray([2, 4, 5]); would return 40.*/

//solution
/*function multiplyArray (e,f) {
    return e*f

}
console.log(multiplyArray(7,8));*/

//challenge:
/*Define a function, as a function expression, 
numArgs that returns the number of arguments
passed to the function when called.*/

//solution
// function argSum(a,b,c,d,e) {
//     return arguments.length;
// }

// let a =5, b = 6, c = 7, d = 11, e = 13;
// var result = argSum(a, b, c, d, e);
// console.log(`Length of arguments passed to the function is : ${result}`);
//challenge:
/*Define a function, as a function declaration, 
reverseString that takes a string, reverses the characters, 
and returns it. For example, reverseString('rockstar');
 would return the string*/

 //solution:
 /*function reverseString (str){
    return str.split("").reverse().join("");

 }
 console.log(reverseString('rockstar')) ;*/



