const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");
let leadArray = [];

// localStorage.clear();
const currData = JSON.parse(localStorage.getItem("myleads"));
if (currData) {
  leadArray = currData;
  console.log(leadArray);
}

// listen for double click on the delete-btn
deleteBtn.addEventListener("dblclick", () => {
  leadArray.length = 0;
  localStorage.clear();
  ulEl.textContent = "";
  render(leadArray);
});

inputBtn.addEventListener("click", function () {
  let txt = inputEl.value;
  if (txt) leadArray.push(txt);
  localStorage.setItem("myleads", JSON.stringify(leadArray));
  // console.log(leadArray);
  render(leadArray);
  inputEl.value = "";
});
const tab = [
  {
    url: "www.google.com",
  },
];
tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    leadArray.push(tabs[0].url);
    localStorage.setItem("myleads", JSON.stringify(leadArray));
    render(leadArray);
  });
});
function render(lead) {
  let listItems = "";
  for (let i = 0; i < lead.length; i++) {
    // console.log(leadArray[i]);
    listItems += `<li>
                      <a target = _blank href = ${lead[i]}> ${lead[i]}
                      </a>
                  </li>`;
  }
  ulEl.innerHTML = listItems;
}
