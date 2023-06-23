// Importing database functions. DO NOT MODIFY THIS LINE.
import { central, db1, db2, db3, vault } from "./databases.js";

async function getUserData(id) {
  const dbs = {
    db1: db1,
    db2: db2,
    db3: db3
  };

  const dbId = await central(id);

   Promise.all([await dbs[dbId](id), await vault(id)]).then(([userInformation, vaultInformation]) => {
    let userData = {};
    userData.userInformation = userInformation;
    userData.vaultInformation = vaultInformation;
    console.log(userData);
  });
  
  //console.log(userInformation);
  //console.log(vaultInformation);
}

let user = getUserData(3);

