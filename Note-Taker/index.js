var addBtn = document.querySelector('.btn');
addBtn.addEventListener("click", solo);

function solo() {
  var heading = document.querySelector("#vanish");
  heading.style.display = "none";

  var containerFluid = document.querySelector(".container");
  var noteText = document.getElementById("inputText");

  var newColumn1 = document.createElement("div");
  newColumn1.classList.add("col-lg-12");
  newColumn1.innerHTML = noteText.value;
  containerFluid.appendChild(newColumn1);
}
