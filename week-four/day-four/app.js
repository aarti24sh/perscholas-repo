const personOne = {
    name: {
        first: 'Timmy',
        last: 'Timtim'
    },
    age: 30,
    location: {
        city: 'New York',
        state: 'New York',
        zip: 10001
    }
}

const personTwo = {
    name: {
        first: 'Julie',
        last: 'July'
    },
    age: 28,
    location: {
        city: 'Albany',
        state: 'New York',
        zip: 12201
    }
};

function moveLocation(person, newLocation) {
    person.location.city = newLocation.city;
    person.location.state = newLocation.state;
    person.location.zip = newLocation.zip;
};

let nLoc = {
    city: 'Rochester',
    state: 'New York',
    zip: 14604
};
console.log("Location of personTwo before moving : " + personTwo.location.city);
moveLocation(personTwo, nLoc);
console.log("Location of personTwo after moving: " + personTwo.location.city);

nLoc = {
    city: 'Mountain View',
    state: 'California',
    zip: 94035
};

moveLocation(personOne,nLoc);
personTwo.location = personOne.location;
console.log(`After marriage new location of ${personOne.name.first} is ${personOne.location.state}`);
console.log(`After marriage new location of ${personTwo.name.first} is ${personTwo.location.state}`);

var personThree = {
    name: {
        first: 'Tiny',
        last: personOne.name.last + "-" + personTwo.name.last
    },
    age: 0,
    location: {
        city: personOne.location.city,
        state: personOne.location.state,
        zip: personOne.location.zip
    }
}

console.log(personThree.name.first, personThree.name.last, personThree.age);

nLoc = {
    city: 'Seattle',
    state: 'Washington',
    zip: 98101
};
moveLocation(personOne,nLoc);
personThree.location = personOne.location;
console.log(`After relocation location of father ${personOne.name.first} is ${personOne.location.state}`);
console.log(`After relocation location of son ${personThree.name.first} is ${personThree.location.state}`);

personOne.age += 20;
personTwo.age += 20;
personThree.age += 20;

console.log(`${personThree.name.first}'s age is now ${personThree.age}`);

