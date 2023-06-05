/*For the Cat class:

Give the class at least three properties.
Give the class at least three methods.
Create two instances of the class (two cats).
Log both instances to see their properties.
Invoke each method from both instances.*/

class Cat {
    constructor(name,age,breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }

    eat() {
        console.log(`${this.name} loves eating fish`);
    }

    sleep() {
        console.log(`${this.name} loves sleeping all day`);
    }

    makenoise() {
        console.log(`${this.name} likes to purrrr, hissss.....`);
    }
}

const cat1 = new Cat("Missy",4,"Siamese");
const cat2 = new Cat("Jeremiah", 6, "Siberian");

console.log(cat1);
console.log(cat2);
cat1.eat();
cat2.makenoise();

/*For the Pirate class:

Create three properties that are set by the constructor.
Create three methods.
Instantiate two arrays of three pirates, name the arrays after your favorite pirate ships: jollyRoger and blackPearl.
Loop over each array and print three properties of each pirate.*/

class Pirate {
    constructor(name,codeword,treasure) {
        this.name = name,
        this.codeword = codeword,
        this.treasure = treasure
    }

    attack() {
        console.log(`${this.name} is launching an attack ...`);
    }

    defend() {
        console.log(`${this.name} is defending ${this.treasure}`);
    }

    loot() {
        console.log(`${this.codeword} - here i come !!`);
    }
}

const jollyRoger = [];
const pirate1 = new Pirate("Barbossa","Avast ye!","Gold chest");
const pirate2 = new Pirate("Blackbeard", "Ahoy there ...", "Diamond pendants");
const pirate3 = new Pirate("Edward England","Shiver me timbers!", "Sunken ship treasure");
jollyRoger.push(pirate1,pirate2,pirate3);
console.log(jollyRoger);

const blackPearl = [];
const pirate4 = new Pirate("Long John Silver","dead men tell no tales","Gold chest");
const pirate5 = new Pirate("Jack Sparrow", "walk the plank", "Ghost ship");
const pirate6 = new Pirate("William kidd","No survivors!", "Sunken ship treasure");
blackPearl.push(pirate4,pirate5,pirate6);

jollyRoger.forEach(function (pirate) {
    console.log(`${pirate.name} says ${pirate.codeword}`);
});

blackPearl.forEach(function (pirate) {
    console.log(`${pirate.defend()}`);
});
