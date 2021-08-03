var elephantContainer = document.querySelectorAll(".elephant");
var frogContainer = document.querySelector(".frog");
var rabbitContainer = document.querySelector(".rabbit");
var pigeonContainer = document.querySelector(".pigeon");


var animals = document.querySelectorAll(".animal");
for(var i=0;i<animals.length;i++) {
  animals[i].addEventListener("click", pickFlag);
}

// the array to hold clicked flag
var flagQueue = [];

function pickFlag(event){ //the event argument gets passed by default
    event.target.childNodes[1].style.zIndex = "0";

    // event.target signifies the target of the event fired
    flagQueue.push(event.target.className); // push the class string to array
    if(flagQueue.length==2){              // if it has 2 elements,
        if(flagQueue[0]==flagQueue[1]){     // compare them
            alert('Congratulations');
        }
        else {
            alert('Try again');
        }
        // whatever happens, reset the flagQueue array
        flagQueue.length = 0;
        setInterval(doThis, 2000);
    }

}


function doThis() {
  location.reload();
}
