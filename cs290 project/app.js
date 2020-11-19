// Carousel automation
var counter = 2;
setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter ++
  if (counter > 4){
    counter = 1;
  } 
}, 7000); // Change every 7 seconds

// Functionality for moving right
function moveRight() {
  document.getElementById('radio' + counter).checked = true;
  counter++
  if (counter > 4) {
    counter = 4
  }
};

// Functionality for moving left
function moveLeft() {
  document.getElementById('radio' + counter).checked = true;
  counter--
  if (counter < 1) {
    counter = 1
  }
};

document.getElementById("prevbutton").addEventListener("click", moveLeft);
document.getElementById("nextbutton").addEventListener("click", moveRight);