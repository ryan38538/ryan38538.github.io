



function enlarge(imgId) {
  document.getElementById("enlarge").style.display = "block";
 document.getElementById("clickedImg").src = document.getElementById(imgId).src;

}

function X() {
   document.getElementById("enlarge").style.display = "none";
}
var pos = 0;
function prev() {
   pos = pos -1;
   if(pos == 12) {
       pos = 0;
   }
   else if(pos == -1) {
       pos = 11;
   }
   var currentImg = document.getElementsByClassName("Image")[pos];
   enlarge(currentImg.id);

}

function Next() {
  pos = pos + 1;
  if(pos == 12) {
      pos = 0;
  }
  else if(pos == -1) {
      pos = 11;
  }

  var currentImg = document.getElementsByClassName("Image")[pos];
  enlarge(currentImg.id);

}
