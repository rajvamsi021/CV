var subject1 = document.getElementById('subject1');
var subject2 = document.getElementById('subject2');
var subject3 = document.getElementById('subject3');
var subject4 = document.getElementById('subject4');
var showPercent = document.querySelector("button");
var total = document.getElementById('sum');
var percentage = document.getElementById('percent');
var grade = document.getElementById("grade");
var position = document.getElementById("position");
var results = document.getElementById('displayResults');


subject1.addEventListener('click', doThis1);
function doThis1() {
  subject1.style.outline = "none";
  subject1.setAttribute("placeholder", "");
}

subject2.addEventListener('click', doThis2);
function doThis2() {
  subject2.style.outline = "none";
  subject2.setAttribute("placeholder", "");
}

subject3.addEventListener('click', doThis3);
function doThis3() {
  subject3.style.outline = "none";
  subject3.setAttribute("placeholder", "");
}

subject4.addEventListener('click', doThis4);
function doThis4() {
  subject4.style.outline = "none";
  subject4.setAttribute("placeholder", "");
}


showPercent.addEventListener("click", perform);
function perform() {
  var a = parseFloat(subject1.value);
  var b = parseFloat(subject2.value);
  var c = parseFloat(subject3.value);
  var d = parseFloat(subject4.value);
  total.innerHTML = a + b + c + d;
  percentage.innerHTML = (a + b + c + d)/4;
  if(percentage.innerHTML > 90) {
    grade.innerHTML = "A";
  }
  else if(percentage.innerHTML >= 75) {
    grade.innerHTML = "B";
  }
  else if(percentage.innerHTML > 55) {
    grade.innerHTML = "C";
  }
  else if(percentage.innerHTML > 35) {
    grade.innerHTML = "D";
  }
  else {
    grade.innerHTML = "F";
  }


  if(grade.innerHTML != "F") {
    position.innerHTML = "Pass";
  }
  else {
    position.innerHTML = "Failed";
  }

  results.style.display = "block";

}
