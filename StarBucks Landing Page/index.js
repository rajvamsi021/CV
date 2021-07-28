var currentImage = document.querySelector(".main-image img");
var circleColor = document.querySelector(".circle3")
var imgs = document.querySelectorAll(".icons img");

imgs.forEach(img => img.addEventListener("click", showImage));

function showImage(e) {
  //console.log(e.target.src);
  currentImage.src = e.target.src;
  if(currentImage.src === imgs[1].src) {
    circleColor.style.background = "#EB7495";
  }
  if(currentImage.src === imgs[2].src) {
    circleColor.style.background = "#D752B1";
    currentImage.style.height = "350px";
  }
  if(currentImage.src === imgs[0].src) {
    circleColor.style.background = "#00704A";
  }

}
