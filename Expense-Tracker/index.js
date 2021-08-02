// setting the autocomplete off for all inputs.
var inp = document.querySelectorAll("input");
for(var i=0;i<inp.length;i++) {
  inp[i].setAttribute("autocomplete", "off");

}


var inputName = document.getElementById("name");
var inputDate = document.getElementById("date");
var inputAmount = document.getElementById("amount");

var tb = document.querySelector("table");

var addBtn = document.querySelector(".btn");
addBtn.addEventListener("click", doThis);
function doThis() {
  // adding row and elements to the table.

  //creating the row element(tr)
  var newRow = document.createElement("tr");
  tb.appendChild(newRow);

  // creating the 3 elements(td)
  var newElement1 = document.createElement("td");
  newElement1.innerHTML = inputName.value;
  newRow.appendChild(newElement1);


  var newElement2 = document.createElement("td");
  newElement2.innerHTML = inputDate.value;
  newRow.appendChild(newElement2);


  var newElement3 = document.createElement("td");
  newElement3.classList.add("amount");
  //newElement3.innerHTML = "&#8377; " + inputAmount.value + "/-";
  newElement3.innerHTML = inputAmount.value;
  newRow.appendChild(newElement3);

}

var totalBtn = document.querySelector("#total");
totalBtn.addEventListener("click", solo);
function solo() {
  var sum = 0;
  var z = document.querySelector(".table").rows.length;
  var x = document.querySelectorAll(".amount");
  for(var i=0;i<(z-1);i++) {
    sum = sum + parseInt(x[i].innerHTML);
  }
  alert("Total Expense Amount is: " + sum);
}
