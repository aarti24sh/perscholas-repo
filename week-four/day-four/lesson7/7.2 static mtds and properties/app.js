//Static Methods and Properties
class Governor {
    static govname = "Jay Inslee";
    static state = "Washington"
    static party = "Democratic";
    static govern() {
        return `Jay Inslee is presiding over state of Washington`;
    }
}
console.log(Governor.govname);
console.log(Governor.govern());

//Inheritance
class Person {
    constructor (name, age) {
        this.name = name,
        this.age = age
    }
    introduceSelf() {
        console.log(`Hi! I am ${this.name} and i am ${this.age} years old!`);
    }
    growOld(years) {
        this.age += years;
    }
    doWork() {
        console.log(`${this.name} is doing work ...`);
    }
};

class PostalWorker extends Person {
    specificWork;

    constructor(name, age) {
        super(name,age);
        this.specificWork = "delivering letters";
    }

    doWork() {
        console.log(`${this.name} is ${this.specificWork}`);
    }
}

class Chef extends Person {
    specificWork;

    constructor(name, age) {
        super(name, age);
        this.specificWork = "cooking gourmet food";
    }

    doWork() {
        console.log(`${this.name} is ${this.specificWork}`);
    }
}

const person1 = new Person("Aarti",20);
person1.introduceSelf();
person1.doWork();
const person2 = new PostalWorker("Swati",30);
person2.introduceSelf();
person2.doWork();
const person3 = new Chef("Akshara", 25);
person3.introduceSelf();
person3.doWork();



