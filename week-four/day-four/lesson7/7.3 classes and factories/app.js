//Hamster Class
class Hamster {
    owner = "";
    price = 15;
    constructor(name) {
        this.name = name;
    }
    wheelRun() {
        console.log("squeak squeak");
    }
    eatFood() {
        console.log("nibble nibble");
    }
    getPrice() {
        return this.price;
    }
}

//Person Class
class Person {
    age = 0;height = 0;weight=0;mood=0;bankAccount=0;
    hamsters=[];
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    getWeight() {
        return this.weight;
    }
    greet() {
        console.log(`Hello from ${this.name}`);
    }
    eat() {
        this.weight++;
        this.mood++;
    }
    exercise() {
        this.weight--;
    }
    ageUp() {
        this.age++;this.height++;this.weight++;this.mood--;
        this.bankAccount += 10;
    }
    buyHamster(hamster) {
        this.hamsters.push(hamster);
        this.mood += 10;
        this.bankAccount -= hamster.getPrice();
    }
}

//Create a Story
const timmy = new Person("Timmy");
for (let i = 0; i < 5; i++) { //make timmy age 5 years
    timmy.ageUp(); 
}
console.log(`State of timmy now`);
console.log(timmy);
for (let i = 0; i < 5; i++) { //make timmy eat 5 times
    timmy.eat();
}
for (let j = 0; j < 5; j++) { //make timmy exercise 5 times
    timmy.exercise(); 
}
for (let k = 0; k < 9; k++) { //make timmy age 9 years
    timmy.ageUp(); 
}
console.log(`State of timmy now`);
console.log(timmy);
const gus = new Hamster("Gus"); //create hamster called gus
gus.owner = "Timmy";   //Timmy is Gus's owner now
timmy.buyHamster(gus); //Timmy guys Gus
for (let k = 0; k < 15; k++) { //make timmy age 15 years
    timmy.ageUp(); 
}
for (let l = 0; l < 2; l++) { //make timmy eat twice
    timmy.eat();
}
for (let l = 0; l < 2; l++) { //make timmy exercise twice
    timmy.exercise();
}
console.log(`State of timmy now`);
console.log(timmy);

//Chefs Make Dinners
