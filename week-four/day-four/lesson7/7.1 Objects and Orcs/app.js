//Arrays within Objects
const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"]
}
//Access all values in the adventurer.belongings array:
console.log(adventurer.belongings);
//Access a specific item in the belongings array:
console.log(adventurer.belongings[2]);
//Iterate Over an Array within an Object
for (let i=0; i < adventurer.belongings.length; i++) {
	console.log(adventurer.belongings[i]);
}
//Object within an Object
let companion = {
    name: "Velma",
    type: "Bat"
};
adventurer.companion = companion;
console.log(adventurer.companion);
//Access the companion's name:
console.log(adventurer.companion.name);
//Access the companion's type:
console.log(adventurer.companion.type);
// /Object within an Object within an Object
let newcompanion = {
    name: "Tim",
    type: "Parasite"
};
companion.companion = newcompanion;
console.log(adventurer);
console.log(adventurer.companion.companion.type);
adventurer.companion.companion.belongings = ["SCUBA tank", "Rogan josh", "health insurance"];
//Array within an Object within an Object within an Object
//let items = ["SCUBA tank", "Rogan josh", "health insurance"];
//adventurer.companion.companion.belongings.push(items);
console.log(adventurer);