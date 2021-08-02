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


  // adding the del button
  var delBtn = document.createElement('button');
  delBtn.classList.add('btn');
  delBtn.classList.add('btn-danger');
  delBtn.classList.add('del');
  delBtn.innerHTML = "X";
  newElement3.appendChild(delBtn);
}


// display of total amount.
var totalBtn = document.querySelector("#total");
totalBtn.addEventListener("click", solo);
function solo() {
  var sum = 0;
  var z = document.querySelector(".table").rows.length;
  var x = document.querySelectorAll(".amount");
  for(var i=0;i<(z-1);i++) {
    // sum = sum + parseInt(x[i].innerHTML);
    // here we use if loop so that if a amount is left empty it doesnt show error.
    if(!isNaN(parseInt(x[i].innerHTML))) {
      sum = sum + parseInt(x[i].innerHTML);
    }
    // if we dont use this if loop we get a error of NaN.
  }
  alert("Total Expense Amount is: " + sum);
}


// del the table row when clicked delBtn

var tb = document.querySelector("table");
tb.addEventListener("click", removeList);
function removeList(e) {
  if(e.target.classList.contains("del")) {
    if(confirm("Are You Sure ?")) {
      var z = e.target.parentElement;
      tb.removeChild(z.parentElement);
    }
  }
}
