//let titleEL = document.getElementById("title");
//console.dir(titleEL);

//let pEL = document.querySelector(".cool");;
//console.log(pEL);
//let commentEls = document.querySelectorAll(".comment");
//console.log(commentEls);
//Navigating Between Elements

let comments = document.querySelector("#comments");
console.log(comments.firstChild.innerText);
console.log(comments.lastChild.innerText);
let parent = comments.parentElement.outerText;
console.log(parent);
