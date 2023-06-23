//Make the GAME an OBJECT
let game = {
    round: 0,
    targetShip: 0,
    userResponse: "",
  };
  
//MY SHIP becomes an OBJECT
  let ussAssembly = {
    name: "USS Assembly",
    hull: 20,
    firePower: 5,
    accuracy: 0.7,
    attack: function () {
      
      let attackChance = Math.random();
      if (attackChance <= this.accuracy) {
        return true;
      } else {
        return false;
      }
    },
  };
  
// CLASS & constructor for Alien Ship
  class AlienShip {
    constructor(name, hull, firePower, accuracy) {
      this.name = name;
      this.hull = hull;
      this.firePower = firePower;
      this.accuracy = accuracy;
    }
    attack() {
      
      let attackChance = Math.random();
      if (attackChance <= this.accuracy) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  
  let alienShips = []; 
  let alienHullValues = [3, 4, 5, 6]; 
  let alienFirePowerValues = [2, 3, 4]; 
  let alienAccValues = [0.6, 0.7, 0.8]; 
  
  
  let createAlienShips = () => {
    for (let i = 0; i < 6; i++) {
      
      let name = "Alien Ship " + (i + 1);
      let hull = alienHullValues[Math.floor(Math.random() * 4)];
      let firePower = alienFirePowerValues[Math.floor(Math.random() * 3)];
      let accuracy = alienAccValues[Math.floor(Math.random() * 3)];
      alienShips[i] = new AlienShip(name, hull, firePower, accuracy); 
    }
  };
  
  
  
  let shipsBattle = (ship1, ship2) => {
    
    let ships = [ship1, ship2];
    let attack = false;
    let attacking = 0;
    let beingAttacked = 1;
    let temp;
    console.log("%c You are attacking an alien! =================", "font-size: 30px");
    while (ships[beingAttacked].hull > 0) {

      
      if (ships[beingAttacked].hull > 0) {
        
        console.log("\n");
        console.log(
          `%c ${ships[attacking].name} attacked ${ships[beingAttacked].name}`,
           "color: purple; border: 1px solid grey; font-size: 18px;"
        );
        
        attack = ships[attacking].attack();
        if (attack === true) {
          ships[beingAttacked].hull -= ships[attacking].firePower; 
          console.log(
            `%c You HIT the alien!!! ${ships[beingAttacked].name} You have done ${ships[beingAttacked].hull} damage`,
            "color: green; font-weight: bold; font-size: 16px;"
          );
        } else {
          console.log(
            `%c Attack Unsuccessful! ${ships[beingAttacked].name} Hull: ${ships[beingAttacked].hull}`,
            "color: red; font-size: 16px;"
          );
        }
        
        if (ships[beingAttacked].hull <= 0) {
          console.log(
            `%c ${ships[beingAttacked].name} has been destroyed`,
            "color: red; border: 1px solid grey; font-size: 16px;"
          );
          if (ships[beingAttacked] === ussAssembly) {
            
            alert("Game Over!!!");
          } else if (
            ships[beingAttacked].name === alienShips[alienShips.length - 1].name
          ) {
            alert(
              `%c ${ships[beingAttacked].name} destroyed!\nAlien fleet has been destroyed!\nyou have been victorious`,
              "color: green;"
            );
          } 
          else {
            game.userResponse = prompt(
              `${alienShips[game.targetShip].name} destroyed!!\n${
                ussAssembly.name
              } Hull: ${
                ussAssembly.hull
              }\nWould you like to ATTACK the next ship or RETREAT from battle?`,
              ""
            );
            game.targetShip += 1; 
            checkUserPrompt();
            return;
          }
        } else {
          
          temp = attacking;
          attacking = beingAttacked;
          beingAttacked = temp;
        }
      }
    }
  };
  
  let checkUserPrompt = () => {
    let responseUpperCase = game.userResponse.toUpperCase();
    if (responseUpperCase === "ATTACK") {
      shipsBattle(ussAssembly, alienShips[game.targetShip]);
    } else if (responseUpperCase === "RETREAT") {
      alert("Game Over! You Live to Fight Again Another Day.");
    }
  };
  
  let startGame = () => {
    
    createAlienShips();
  
    game.userResponse = prompt(
      "Alien fleet approaching\nWould you like to ATTACK the first ship or RETREAT?",
      ""
    );
    checkUserPrompt();
  };
  
  // Starting the game
  startGame();