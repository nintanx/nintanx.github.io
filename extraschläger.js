var xposExtraSchläger = 100;
var yposExtraSchläger = 100;
var speedExtraY = 5;

function extra() {
  fill(255, 0, 0);
  rect(xposExtraSchläger, yposExtraSchläger, 5, 30);
}
function bewegungExtraSchläger() {
  //Hoch
  if (yposExtraSchläger > 0) {
    yposExtraSchläger = yposExtraSchläger + 5;
    //Runter
  }
  if (yposExtraSchläger > 370) {
    console.log("Yeet");
    yposExtraSchläger = yposExtraSchläger - 5;
  }
}

function draw() {
  clear();
  bewegungExtraSchläger();
  extra();
  console.log(yposExtraSchläger);
}
