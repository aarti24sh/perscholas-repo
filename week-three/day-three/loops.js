/*for (let i=10-1;i > 0;i--) 
console.log(i);*/

//output of odd numbers from 1 to 10
/*for (let i = 1;i<=10; i++){
    if(i % 2 === 1){
        console.log(i)
    }*/

  //output of even numbers from 1 to 10
 /*for (let i = 1;i<=10; i++)  {
    i(i % 2 ---0 );{
        console.log(i);
    }
  }*/
  //output multiples of 3, starting at 6 ending at 60
  /*for (let i =6; i<=60; i+=3) {
    console.log(i);
  }*/

  //Output an increasing number of # symbols, from 1 to 7, as shown below.
 /* let output = "";
  for (let i = 1 ; i<=7; i++) {
    console.log(output+="#");
  }*/
  //print even and odd numbers
  /*for (let i = 1; i<=20; i++ ){
    if (i % 2==0) {
      console.log (i + " is even");
    }
    else {
      console.log(i + " is odd");
    }*/
//output  for prime number to prime
/*for (let i = 1;i<=20;i++)
  {
   let flag=0;
   for(let j=2;j<=i/2;j++) 
   {
    if(i%j==0)
    {
flag=1;
break;
    }
   }
   if(flag==0)
   {
    console.log(i);
   }
  }*/

  //while loop countdown to 0
  /*let x = 10;
  while ( x > 0 ) {
    x --;
    console.log(x);
  }*/

  //Log integers in multiples of 3 as long as they are less than 35.

/*let x = 0;
while (x <= 35) {
  x += 3;
  console.log(x);
}*/

//Print integers in multiples of 5 as long as they are less than 100.
/*let x = 0;
while (x <= 100) {
  x += 5;
  console.log(x);
}*/
//Print integers between 0 and 20 with the following 
// let x = 1;
// while (x <= 20) {
//   if (x % 2 == 0) {
//     console.log(x + " is divisible by 2");
//     console.log("The value of " + x + " multiplied by 3 is "+ x*3);
//   }
//   x++;
// }
//Print all prime numbers between 0 and 20.
/*let isPrime = true;
 
console.log("Prime numbers from 1 to 20 are: ");
 
let i =2;
while(i <= 20){
  let j=2;
  while(j < i - 1){
    if(i % j == 0){
      isPrime = false;
      break;
    }
    j++;
  }
  if(isPrime){
    console.log(i);
  }
  isPrime = true;
  i++;
}*/

/*//Reverse string using loop
let string = prompt("Please enter string");
let strln = string.length;
for(let i = strlen-1;i>=0;i--){
  console.log(string[i]);
}*/

//Reverse string using loop no reverse
/*let str = "aarti";
let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    } 

    console.log("The reverse of " + str + " is " + newString);*/

    //Write a for loop that calculates and prints the sum of all numbers from 1 to 100.
   /* let sum = 0;
for (let i=1;i<=100;i++){
  sum = sum + i;
}
console.log(sum);*/

//Write a for loop that prints the multiplication table for a given number(you can set your condition to stop at 10)
  
  let y = 9;

  console.log("Printing multiplication table for " + y);
  for (let index = 1; index <= 10; index++) {
      console.log(y + " times "+ index + " = " + y*index);
  }

  







