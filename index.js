const text = document.getElementById("note");
const amount = document.getElementById("amount");
const addBtn = document.getElementById("add");
console.log("running");
// handle display
function display(note, amt) {
  console.log(note, amt);
  const history = document.getElementById("history");
  // console.log(history.classList);
  const record = document.createElement("div");
  record.classList.add("record");
  if (amt.charAt(0) === "+" || amt.charAt(0)!=="-") record.classList.add("record-income");
  else record.classList.add("record-expense");
  let noteText = document.createElement("p");
  let amount = document.createElement("p");
  
  noteText.innerText = note;
  amount.innerText = amt;
  
  record.appendChild(noteText);
  record.appendChild(amount);
  history.appendChild(record);
  clearData();
}

function clearData(){
  text.value = "";
  amount.value = "";
}

addBtn.addEventListener("click", (e) => {
  //   dono value honi chahiye
  e.preventDefault(); // redirect off kardeta hai input[type='submit']
  // false -> empty string "" , NaN , undefined
  if (text.value && amount.value) {
    let note = text.value;
    let amt = amount.value;
    display(note, amt);
  
  }
});


