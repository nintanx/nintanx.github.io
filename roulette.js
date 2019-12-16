function hintergrund() {
  //Hintergrund -> Internet
  var startColor = color(0, 0, 0);
  var endColor = color(0, 230, 80);
  for (var i = 0; i < height; i = i + 1) {
    r = red(startColor) + ((red(endColor) - red(startColor)) / height) * i;
    g =
      green(startColor) + ((green(endColor) - green(startColor)) / height) * i;
    b = blue(startColor) + ((blue(endColor) - blue(startColor)) / height) * i;
    stroke(r, g, b);
    line(0, i, width - 1, i);
  }
}

var speed = 0;
var x = 0;
var y = 0;
var move;
var circleX = 0;
function button(x, y, scale, r, g, b) {
  fill(r, g, b);
  rect(x - 65 * scale, y + 100 * scale, 400 * scale, 100 * scale);
}

var x = 0;

function mousePressed() {
  if (mouseX < 300 && mouseY > 50 && mouseX > 150 && mouseY < 130) {
    circleX = 0;
    speed = 10;
    console.log("Start");
  }

  if (
    mouseX < 380 &&
    mouseX > 290 &&
    mouseY > 400 &&
    mouseY < 440 &&
    mouseIsPressed
  ) {
    fill(0, 0, 0);
    text("Schwarz", 305, 428);
    console.log("Schwarz gewählt");
  }

  if (
    mouseX < 180 &&
    mouseX > 100 &&
    mouseY > 400 &&
    mouseY < 440 &&
    mouseIsPressed
  ) {
    fill(255, 0, 0);
    text("Rot", 119, 430);
    console.log("Rot gewählt");
  }
}

function draw() {
  circleX = circleX + speed;
  if (circleX > round(random(35, 435))) {
    speed = 0;
  }
  hintergrund();
  noStroke();
  fill(0, 0, 0);
  button(100, 100, 1);
  fill(255, 0, 0);
  rect(35, 200, 50, 100);
  rect(137, 200, 50, 100);
  rect(240, 200, 50, 100);
  rect(340, 200, 50, 100);
  fill(255, 255, 255);
  rect(35, 245, 400, 10);

  noStroke();

  rect(150, 50, 150, 80);

  fill(0, 0, 0);
  textFont("impact");
  textSize(40);
  var t1 = "Start";
  text(t1, 180, 100);
  fill(255, 255, 255);
  circle(circleX + 35, 250, 10);

  fill(255, 105, 180);

  //Roter Button
  fill(255, 0, 0);
  rect(100, 400, 80, 40);
  fill(0, 0, 0);
  textSize(30);
  textFont("impact");
  text("Rot", 119, 430);

  //Schwarzer Button

  fill(0, 0, 0);
  rect(300, 400, 80, 40);
  fill(255, 255, 255);
  textSize(20);
  textFont("impact");
  text("Schwarz", 305, 428);
  console.log(circleX);
}
