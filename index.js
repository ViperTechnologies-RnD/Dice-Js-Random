var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
// if (randomNumber1 === 1) {
//   document.lastElementChild.lastElementChild.children[0].children[1].children[1].setAttribute("src", "images/dice1.png");
// } else if (randomNumber1 === 2) {
//   document.querySelector("img").setAttribute("src", "images/dice2.png");
// } else if (randomNumber1 === 3) {
//   document.lastElementChild.lastElementChild.firstElementChild.children[1].lastElementChild.setAttribute("src", "images/dice3.png");
// } else if (randomNumber1 === 4) {
//   document.lastElementChild.lastElementChild.firstElementChild.children[1].lastElementChild.setAttribute("src", "images/dice4.png");
// } else if (randomNumber1 === 5) {
//   document.lastElementChild.lastElementChild.children[0].children[1].lastElementChild.setAttribute("src", "images/dice5.png");
// } else {
//   document.lastElementChild.lastElementChild.firstElementChild.children[1].lastElementChild.setAttribute("src", "images/dice6.png");
// }

var dice1 = "images/dice" + randomNumber1 + ".png";
var dice2 = "images/dice" + randomNumber2 + ".png";
document.querySelector(".dice .img1").setAttribute("src", dice1);
//document.querySelectorAll("img")[0].setAttribute("src", dice1);
document.querySelector(".dice .img2").setAttribute("src", dice2);

if (randomNumber1 === randomNumber2) {
  document.querySelector(".container h1").innerText = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector(".container h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector(".container h1").innerHTML = "Player 2 Wins! 🚩";
}
