var addBtn = document.querySelector('.btn');
addBtn.addEventListener("click", solo);
var note = 0;
function solo() {
  var containerFluid = document.querySelector(".container");
  note++;
  // vanishing the h3
  var heading = document.querySelector("#vanish");
  heading.style.display = "none";

  // getting the input value.
  var noteText = document.getElementById("inputText");

  // creating the div with class card.
  var cd = document.createElement("div");
  cd.classList.add('card');
  containerFluid.appendChild(cd);


  // creating the div with class card-body
  var newColumn = document.createElement("div");
  newColumn.classList.add("card-body");
  cd.appendChild(newColumn);


  // creating the h4 with class card-title
  var newHead = document.createElement("h4");
  newHead.classList.add("card-title");
  newHead.innerHTML = "Note " + note;
  newColumn.appendChild(newHead);


  // creating the paragragh with class card-text.
  var newText = document.createElement('p');
  newText.classList.add("card-text");
  newText.innerHTML = noteText.value;
  newColumn.appendChild(newText);


  // creating the view button.
  var newButton = document.createElement('button');
  newButton.classList.add("btn");
  newButton.classList.add("btn-primary");
  newButton.classList.add("mb-2");
  newButton.classList.add("viewBtn");
  newButton.innerHTML = "View Note";
  newColumn.appendChild(newButton);


  // when view button clicked it should display as modal
  var viewBtn = document.querySelectorAll('.viewBtn');
  viewBtn.forEach(img => img.addEventListener("click", doThis));
  function doThis() {
    var modal = document.querySelector(".container-fluid.modal");
    var noteText = document.querySelector("#inputText");
    var text = document.querySelector(".text");
    text.innerHTML = noteText.value;
    modal.style.display = "block";
  }



  // when del button of modal is clicked.
  var delBtn = document.querySelector(".delBtn");
  delBtn.addEventListener("click", close);
  function close() {
    var modal = document.querySelector(".container-fluid.modal");
    modal.style.display = "none";
  }


}
