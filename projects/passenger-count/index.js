let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increament() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  console.log(count);
  let countStr = count + " - ";
  console.log(saveEl, countStr);
  saveEl.textContent += countStr;
  count = 0;
  countEl.textContent = count;
}
