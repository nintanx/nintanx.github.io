function hintergrund() {
  //Hintergrund -> Internet
  var startColor = color(0, 0, 0);
  var endColor = color(0, 10, 70);
  for (var i = 0; i < height; i = i + 1) {
    r = red(startColor) + ((red(endColor) - red(startColor)) / height) * i;
    g =
      green(startColor) + ((green(endColor) - green(startColor)) / height) * i;
    b = blue(startColor) + ((blue(endColor) - blue(startColor)) / height) * i;
    stroke(r, g, b);
    line(0, i, width - 1, i);
  }
}

let x = 200;
let y = 100;
let speedY = 4;
let speedX = 2;
let playervelx = 5;
let fuel = 100;
let ground = {
  x: 0,
  y: 400
};
let start = false;

function rocket(x, y) {
  //Grundkörper Rakete
  noStroke();

  fill(255, 0, 0);
  arc(x - 50, y - 50, 25, 100, PI, 0, CHORD);
  fill(0, 0, 0);
  rect(x - 58, y - 50, 15, 8); //Antrieb
  fill(255, 255, 255);
  circle(x - 50, y - 80, 4);
  circle(x - 50, y - 65, 6);

  //Linker Flügel
  push();
  fill(255, 0, 0);
  translate(x - 74, y - 60);
  rotate(-0.6);
  rect(0, 0, 15, 8);
  pop();

  //Rechter Flügel
  push();
  fill(255, 0, 0);
  translate(x - 38, y - 68);
  rotate(0.6);
  rect(0, 0, 15, 8);
  pop();

  // stroke(255);
  // strokeWeight(5);
  // point(125,142);
  // point(130,146);
  // point(127,158);
  noStroke();
  fill(255, 0, 0);
  beginShape();
  vertex(x - 74, y - 60);
  vertex(x - 68, y - 54);
  vertex(x - 73, y - 35);
  endShape(CLOSE);

  // stroke(255);
  // strokeWeight(5);
  // point(173,141);
  // point(168,145);
  // point(171,165);

  beginShape();
  vertex(x - 26, y - 59);
  vertex(x - 32, y - 55);
  vertex(x - 29, y - 35);
  endShape(CLOSE);
}

function gameOver() {
  if (fuel <= 0) {
    gravity = 0;
    speedX = 0;
    speedY = 0;

    fuel = 0;
    fill(255);
    textSize(40);
    text("You Loose", 200, 200);
  }
}

// Bewegung:
function draw() {
  //Boden
  clear();
  hintergrund();
  noStroke();
  rocket(x, y);
  fill(0, 0, 0);
  rect(ground.x, ground.y, 500, 150);

  //Sterne
  fill(255, 255, 0);
  ellipse(110, 10, 5, 5);
  ellipse(250, 90, 5, 5);
  ellipse(80, 190, 5, 5);
  ellipse(180, 300, 3, 3);
  ellipse(400, 140, 2, 2);
  ellipse(450, 50, 6, 6);
  ellipse(320, 220, 4, 4);
  ellipse(60, 350, 4, 4);
  ellipse(320, 330, 5, 5);
  ellipse(440, 300, 3, 3);
  ellipse(190, 180, 4, 4);

  //Button
  fill(72, 118, 255);
  rect(10, 10, 90, 40);
  rect(10, 60, 90, 40);
  fill(0, 0, 0);
  textSize(24);
  textFont("impac");
  text("START", 17, 40);
  text("RESET", 17, 90);
  //Treibstoff
  fill(255, 0, 0);
  textSize(24);
  textFont("impac");
  text("Fuel: " + fuel, 300, 50);
  gameOver();
  if (
    mouseIsPressed === true &&
    mouseX >= 10 &&
    mouseX <= 100 &&
    mouseY >= 10 &&
    mouseY <= 50
  ) {
    start = true;
  }
  if (
    mouseIsPressed === true &&
    mouseX >= 10 &&
    mouseX <= 100 &&
    mouseY >= 60 &&
    mouseY <= 100
  ) {
    start = false;
    x = 200;
    y = 100;
    speedY = 4;
    speedX = 2;
    fuel = 100;
  }
  if (start === true) {
    if (keyIsDown(UP_ARROW) && y < 440) {
      fuel -= 1;
      playervelx = 1;
      speedY = speedY - 0.08;
    } else if (y < 440) {
      playervelx = 5;
      speedY = 4;
    }
    y = y + speedY;

    if (keyIsDown(RIGHT_ARROW)) {
      fuel -= 1;

      playervelx = 2;
      x = x + speedX;
    }
    if (keyIsDown(LEFT_ARROW)) {
      fuel -= 1;
      playervelx = 2;
      x = x - speedX;
    }
  }
  if (y >= 440) {
    y = 440;
    start = false;
    if (playervelx === 1) {
      textSize(40);
      text("You Win", 200, 200);
    } else {
      text("You Loose", 200, 200);
    }
  }
}
