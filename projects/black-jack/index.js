// let cards = [];
// let sum = 0;
// let players = { name: "Nitish", chip: 150 };
// let hasBlackJack = false;
// let isAlive = false;
// let message = "";
// let messageEl = document.getElementById("message-ele");
// let sumEl = document.querySelector("#sum-el");
// let cardsEl = document.getElementById("cards-el");
// let playersEl = document.getElementById("players-el");
// playersEl.textContent += players.name + ": $" + players.chip;

// function startGame() {
//   //reseting the the variables
//   isAlive = true;
//   sum = 0;
//   cards.length = 0;
//   let firstCard = getRandomCard();
//   let secondCard = getRandomCard();
//   cards.push(firstCard);
//   cards.push(secondCard);
//   sum = firstCard + secondCard;
//   renderGame();
// }

// function getRandomCard() {
//   let randomNunber = Math.floor(Math.random() * 13 + 1);
//   if (randomNunber > 10) {
//     randomNunber = 10;
//   } else if (randomNunber === 1) {
//     randomNunber = 11;
//   }
//   return randomNunber;
// }

// function renderGame() {
//   cardsEl.textContent = "Cards: ";
//   for (let i = 0; i < cards.length; i++) {
//     cardsEl.textContent += cards[i] + " ";
//   }
//   if (sum < 21) {
//     message = "Do you want to draw another card ? ";
//   } else if (sum === 21) {
//     message = "Wohoo ! You've got  blackjack !!";
//     hasBlackJack = true;
//   } else {
//     isAlive = false;
//     message = "You are out of the game";
//   }
//   messageEl.textContent = message;
//   sumEl.textContent = "Sum: " + sum;
//   console.log(message);
// }

// function newCard() {
//   console.log(isAlive, hasBlackJack);
//   if (isAlive === true && hasBlackJack === false) {
//     let newCard = getRandomCard();
//     sum += newCard;
//     cards.push(newCard);
//     renderGame();
//   }
// }
let largestCountries = ["Tuvalu", "India", "Usa", "Indonesia", "Monaco"];
console.log(largestCountries);
largestCountries.pop();
console.log(largestCountries);
largestCountries.push("Pakistan");
console.log(largestCountries);
largestCountries.shift();
console.log(largestCountries);
largestCountries.unshift("China");
console.log(largestCountries);
