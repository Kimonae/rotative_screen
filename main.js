document.addEventListener("DOMContentLoaded", (event) => {
  window.addEventListener("resize", detectOrientation);
  detectOrientation();
});

var g = document.getElementById("displayContent");
var f = document.getElementById("rotateScreen");
var orientation = screen.orientation;

function detectOrientation() {
  //Votre code ici

  if (screen.width > screen.height) {
    g.style.display = "block"; 
    f.style.display = "none";//syle.visibility = "hidden" ?
  } else {
    g.style.display = "none";
    f.style.display = "block";
  }
  console.log(screen.orientation);
}
