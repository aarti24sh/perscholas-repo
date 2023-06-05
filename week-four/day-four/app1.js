/* How do we assign a value to a variable? 
Ans : example let x = 5;
How do we change the value of a variable?
Ans : x = 10 // change the value
How do we assign an existing variable to a new variable?
Ans : let x = y // assigned the value of y to x
Remind me, what are declare, assign, and define?
Ans :   declare is simply creating a variable
        assign is giving a variable a value
        define is declare + assign
What is pseudocoding and why should you do it?
Ans : Pseudo code helps you to understand the flow and prevent you into getting into deeper details in the beginning
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
generally 60% thinking and 40% implementing, for more complex problems it is 70%-30%
*/
/*let firstVariable = "Hello World";
firstVariable = 5;
let secondVariable = firstVariable;
secondVariable = "Hello Perscholas";
console.log(`Value of first variable is ${firstVariable}`);
console.log(`Value of second variable is ${secondVariable}`);

let yourName = "Aarti";
let greeting = "Hello,my name is " + yourName;
console.log(greeting);*/
//Booleans

/*const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log(a < b);
console.log(c > d);
console.log('Name' == 'Name');*/

//console.log(true || false);
  //console.log(false _ false __ false __ false __ false __ true);
  //console.log(false && false)
 //console.log(e =='Kevin');
 //console.log(a ? b : c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  //console.log(a = a > d); // note: the answer is a simple arithmetic equation, not something "weird"
  //console.log(48 +'48');
  //D The FARM
   /*let animal = "";
   if (animal==="cow"){
    console.log(moo)
   }else{
    console.log("Hey!You are not a cow")
   }*/
  // E. Driver's Ed
 /* let age = 35;
  if (age>=16){
    console.log("Here are the keys")
  }else{
    console.log("You are too young")
  }*/
  //II. Loops
  /*for (let a = 0; a<11;a++){
    console.log(a)
  }*/
  //for (let a = 10; a < 401;a++){
   // console.log(a)
//
/*for (let a = 10; a < 4002; a+=2){
     console.log(a)
}*/
//B. Get Even
//for (let g = 2; g < 102;g+=2){
   // console.log(g +"is an even number")
//
// Give me Five

/*for (let c = 1; c < 101; c++){
	if (0 === c % 5 && c % 3 === 0){
		console.log("I found a " + c + ". High five!");
		console.log("I found a " + c + ". Three is a crowd");
	} else if (c % 5 === 0){
		console.log("I found a " + c + ". High five!");
	} else if (c % 3 === 0){
		console.log("I found a " + c + ". Three is a crowd");
	}
}*/
/*D. Savings Account
Write code that will save the sum of all the numbers between 1 - 10 
to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will
 save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.*/
/*let bank_account = 0;
for (let d = 1; d < 11; d++){
	bank_account += d;
};
console.log(bank_account);
bank_account = 0;
for (d = 1; d < 101; d++){
	bank_account += d * 2;
};
console.log(bank_account);*/
//Create an array that contains three quotes and store it in a variable called quotes.
//const quotes = ["things will work out","make it happen","live what you love"];
/*C. Accessing Elements
Given the following array, const randomThings = [1, 10, "Hello", true]:

How do you access the 1st element in the array?
What would you write to access the 3rd element of the array?*/

/*const randomThings = [1, 10, "Hello", true];
randomThings[0]; 
randomThings[2] = "Hello";
randomThings;*/

//D. Change Values
/*Given the following array, 
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]:
Change the value of "Github" to "Octocat".
Add a new element, "Cloud City" to the array.
Check the value of the array to make sure it updated the array.
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[4] = "Octat";
console.log(ourClass);
ourClass.push("Cloud City");
console.log(ourClass); */

/*E. Mix It Up*/

const myArray = [5, 10, 500, 20];
//Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
myArray.push("Aegon");
myArray.push("Targaryen");
console.log(myArray);
myArray.shift();
console.log(myArray);
myArray.unshift("Bob Marley");
console.log(myArray);
myArray.pop();
console.log(myArray);
myArray.reverse();
console.log(`Original array has been mutated !! : ${myArray}`);
// The reverse method changes the original array as well

//F. Biggie Smalls
let num = 15;
if (num < 100)
   console.log(`The number ${num} is less than 100`);
else
   console.log(`The number is greater than or equal to 100`);

//G. Monkey in the Middle

let val = 7;
if (val < 5)
    console.log(`The number is less than 5`);
else if (val > 10)
    console.log(`big number`);
else
    console.log("monkey");

//H. What's in Your Closet?

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
kristynsCloset.splice(6,0,"raybans");
console.log(`Kristen's closet now : ${kristynsCloset}`);
kristynsCloset[5] = "stained knit hat";
console.log(`Kristen's closet now : ${kristynsCloset}`);

console.log(`First shirt in Thom's shirt collection : ${thomsCloset[0][0]}`);
console.log(`First pant in Thom's pant collection : ${thomsCloset[1][0]}`);
console.log(`First item in Thom's accessory collection : ${thomsCloset[2][0]}`);
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]} and ${thomsCloset[2][0]}!`);
thomsCloset[1][2] = "Footie Pajamas";
console.log(`Thom's closet now : ${thomsCloset}`);

//IV. Functions
//A. printGreeting
function printGreeting(name) {
    return `Hello there, ${name}!`;
};
console.log(printGreeting("Aarti"));

//B. printCool
let printCool = function(name) {
    return `${name} is cool`;
}
console.log(printCool("Aarti Shankar"));

//C. calculateCube
let calculateCube = function(num) {
    return num*num*num;
}
console.log(calculateCube(5));

//D. isVowel
let isVowel = function(char) {
    if (char.length == 1) {
        var vowels = new Array("a", "e", "i", "o", "u");
    var isVowel = false;

    for (ch in vowels) {
      if (vowels[ch] == char) {
        isVowel = true;
      }
    }
    return isVowel;
    }
}
console.log(`Is "a" a vowel : ${isVowel("a")}`);
console.log(`Is "b" a vowel : ${isVowel("b")}`);

//E. getTwoLengths
function getTwoLengths(str1, str2) {
    let strLengths = [];
    strLengths.push(str1.length);
    strLengths.push(str2.length);
    return strLengths;
}
console.log(getTwoLengths("Hank", "Hippopopalous"));

//F. getMultipleLengths
function getMultipleLengths(vals) {
    let result = [];
    for (i=0; i < vals.length; i++) {
        result.push(vals[i].length);
    }
    return result;
}
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));

//G. maxOfThree
function maxOfThree(num1, num2, num3) {
    const largest = Math.max(num1, num2, num3);
    return largest;
}
console.log(maxOfThree(61, 9, 13));

//H. printLongestWord
function printLongestWord(strs) {
    let longestWordCount = 0;
    let longestWord = "";
    strs.forEach(str => {
       if (str.length > longestWordCount){
            longestWordCount = str.length;
            longestWord = str;
       }
    });

    return longestWord;
}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));

//Objects
//A. Make a User Object
const user = {
    name : "Aarti",
    email : "aarti@xxx.com",
    age : 20,
    purchased : []
};
console.log(user);
//B. Update the User
user.email = "kiera@xxx.com";
console.log(user);
user.age++;
console.log(user);
//C. Adding Keys and Values
//user.location = "Seattle, WA";
user["location"] = "Seattle, WA";
console.log(user);
user.purchased.push("carbohydrates");
console.log(user);
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user);
console.log(user.purchased.pop());
const friend = {
    name : "Sirisha",
    email : "siri@xxx.com",
    age : 25,
    location : "Portland, OR",
    purchased : []
};
user.friend = friend;
console.log(user);
console.log(user.friend.name);
console.log(user.friend.location);
user.friend.age = 55;
user.friend.purchased.push("The One Ring");
user.friend.purchased.push("A latte");
console.log(user);
console.log(user.friend.purchased.pop());

//F. Loops
for (let index = 0; index < user.purchased.length; index++) {
    console.log(`User purchased item : ${user.purchased[index]}`);
}

for (let index = 0; index < user.friend.purchased.length; index++) {
    console.log(`User's friend purchased item : ${user.friend.purchased[index]}`);
}

//G. Functions Operating on Objects
//function updateUser() {
    //user.age++;
    //user.name = user.name.toUpperCase();
//}

//updateUser();
console.log(`Updated user is : ${user}`);

function oldAndLoud(person) {
    person.age++;
    person.name = person.name.toUpperCase();
}

oldAndLoud(user);
console.log(`Updated user by oldAndLoud function is : ${user.name} ${user.age}`);