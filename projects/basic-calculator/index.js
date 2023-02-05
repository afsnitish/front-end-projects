let num1 = 8;
let num2 = 2;

document.getElementById("num1-ele").textContent = num1;
document.getElementById("num2-ele").textContent = num2;
let sumEl = document.getElementById("sum-el");

function add() {
  sumEl.textContent = "Result : ";
  let result = num1 + num2;
  sumEl.textContent += result;
}

function sub() {
  sumEl.textContent = "Result : ";
  let result = num1 - num2;
  sumEl.textContent += result;
}

function mul() {
  sumEl.textContent = "Result : ";
  let result = num1 * num2;
  sumEl.textContent += result;
}

function div() {
  sumEl.textContent = "Result : ";
  let result = num1 / num2;
  sumEl.textContent += result;
}
