import g, { add as a } from "./main.js";
import { add as b } from "./script.js";

let person = "jim";
console.log(g(person));
console.log(a(4, 5));
console.log(b(4, 5))