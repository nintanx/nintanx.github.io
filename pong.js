var hintergrund;
var donut;

function preload() {
  hintergrund = loadImage("Hintergrundbig.jpg");
  donut = loadImage("Donut Pink.png");
  donut2 = loadImage("Donut Lila.png");
}

function setup() {
  startscreen = true;
  start = false;
  hilfe = false;
  let canvas = createCanvas(400, 400);
  canvas.parent("game");

  hintergrund.loadPixels();
  donut.loadPixels();
  donut2.loadPixels();
}

var schläger;
var schläger2;
var ball;

//Rechter Schläger
var xposRechterSchläger = 390 - 18;
var yposRechterSchläger = 160;

//Linker Schläger
var xposLinkerSchläger = 10;
var yposLinkerSchläger = 160;

//Ball Geschwindigkeit
var speedX = 1;
var speedY = 2;
var ballX = 200;
var ballY = 200;
// Score

var scorelinks = 0;
var scorerechts = 0;
//Bildschirme
var start = false;
var startscreen = true;
var hilfe = false;
var endscreen = false;

var scale = 0.2;
//Extra Schläger
var xposExtraSchläger = 100;
var yposExtraSchläger = 0;
var xposExtraSchläger2 = 300;
var yposExtraSchläger2 = 0;
var runter = true;

//Donuts
var foodX;
var foodY;
var food2X;
var food2Y;
var newFood2;
var newFood = true;
var hit = false;
var hit2 = false;

var time = 0;

//Kirby
function kirby(ballX, ballY, scale) {
  //Arme
  //Links
  noStroke();
  push();

  fill(255, 174, 185);
  translate(ballX - 40 * scale, ballY);
  rotate(-1.9);
  arc(0, 0, 37 * scale, 60 * scale, PI, 0, CHORD);
  pop();

  //Rechts
  push();
  fill(255, 174, 185);
  translate(ballX + 40 * scale, ballY);
  rotate(1.9);
  arc(0, 0, 37 * scale, 60 * scale, PI, 0, CHORD);
  pop();

  //Füße
  push();

  fill(230, 0, 0);
  translate(ballX - 25 * scale, ballY + 30 * scale);
  rotate(3.5);
  arc(0, 0, 43 * scale, 65 * scale, PI, 0, CHORD);
  pop();

  push();
  fill(230, 0, 0);
  translate(ballX + 25 * scale, ballY + 30 * scale);
  rotate(-3.5);
  arc(0, 0, 43 * scale, 65 * scale, PI, 0, CHORD);
  pop();

  fill(255, 174, 185);
  ellipse(ballX, ballY, 100 * scale, 100 * scale); //Kopf
  fill(0, 0, 0);
  ellipse(ballX - 10 * scale, ballY - 14 * scale, 12 * scale, 25 * scale); //Linkes Auge Außen
  ellipse(ballX + 10 * scale, ballY - 14 * scale, 12 * scale, 25 * scale); //Rechtes Auge Außen
  fill(255, 255, 255);
  ellipse(ballX - 10 * scale, ballY - 20 * scale, 7 * scale, 11 * scale); //Linkes Auge Innen oben
  ellipse(ballX + 10 * scale, ballY - 20 * scale, 7 * scale, 11 * scale); //Rechtes Auge Innen oben
  fill(30, 144, 255);
  arc(
    ballX - 10 * scale,
    ballY - 11 * scale,
    9 * scale,
    16 * scale,
    0,
    PI,
    CHORD
  ); //Linkes Auge Innen unten
  arc(
    ballX + 10 * scale,
    ballY - 11 * scale,
    9 * scale,
    16 * scale,
    0,
    PI,
    CHORD
  ); //Rechtes Auge Innen Rechts
  noStroke();
  fill(0, 0, 0);
  ellipse(ballX - 10 * scale, ballY - 11 * scale, 8 * scale, 5 * scale); //Links
  ellipse(ballX + 10 * scale, ballY - 11 * scale, 8 * scale, 5 * scale); //Rechts

  //Mund
  fill(210, 0, 0);
  ellipse(ballX, ballY + 25 * scale, 36 * scale, 38 * scale);
  fill(220, 60, 60);
  ellipse(ballX - 1 * scale, ballY + 30 * scale, 27 * scale, 24 * scale);

  //Wangen
  fill(255, 110, 180);
  ellipse(ballX - 25 * scale, ballY, 15 * scale, 10 * scale);
  ellipse(ballX + 25 * scale, ballY, 15 * scale, 10 * scale);
}

function kirby2(ballX, ballY, scale) {
  //Arme
  //Links
  noStroke();
  push();

  fill(255, 174, 185);
  translate(ballX - 40 * scale, ballY);
  rotate(-1.9);
  arc(0, 0, 37 * scale, 60 * scale, PI, 0, CHORD);
  pop();

  //Rechts
  push();
  fill(255, 174, 185);
  translate(ballX + 40 * scale, ballY);
  rotate(1.9);
  arc(0, 0, 37 * scale, 60 * scale, PI, 0, CHORD);
  pop();

  //Füße
  push();

  fill(230, 0, 0);
  translate(ballX - 25 * scale, ballY + 30 * scale);
  rotate(3.5);
  arc(0, 0, 43 * scale, 65 * scale, PI, 0, CHORD);
  pop();

  push();
  fill(230, 0, 0);
  translate(ballX + 25 * scale, ballY + 30 * scale);
  rotate(-3.5);
  arc(0, 0, 43 * scale, 65 * scale, PI, 0, CHORD);
  pop();

  fill(255, 174, 185);
  ellipse(ballX, ballY, 100 * scale, 100 * scale); //Kopf
  fill(0, 0, 0);
  ellipse(ballX - 10 * scale, ballY - 14 * scale, 12 * scale, 25 * scale); //Linkes Auge Außen
  ellipse(ballX + 10 * scale, ballY - 14 * scale, 12 * scale, 25 * scale); //Rechtes Auge Außen
  fill(255, 255, 255);
  ellipse(ballX - 10 * scale, ballY - 20 * scale, 7 * scale, 11 * scale); //Linkes Auge Innen oben
  ellipse(ballX + 10 * scale, ballY - 20 * scale, 7 * scale, 11 * scale); //Rechtes Auge Innen oben
  fill(30, 144, 255);
  arc(
    ballX - 10 * scale,
    ballY - 11 * scale,
    9 * scale,
    16 * scale,
    0,
    PI,
    CHORD
  ); //Linkes Auge Innen unten
  arc(
    ballX + 10 * scale,
    ballY - 11 * scale,
    9 * scale,
    16 * scale,
    0,
    PI,
    CHORD
  ); //Rechtes Auge Innen Rechts
  noStroke();
  fill(0, 0, 0);
  ellipse(ballX - 10 * scale, ballY - 11 * scale, 8 * scale, 5 * scale); //Links
  ellipse(ballX + 10 * scale, ballY - 11 * scale, 8 * scale, 5 * scale); //Rechts

  //Wangen
  fill(255, 110, 180);
  ellipse(ballX - 25 * scale, ballY, 15 * scale, 10 * scale);
  ellipse(ballX + 25 * scale, ballY, 15 * scale, 10 * scale);
}

function schläger() {
  noStroke();
  fill(255, 0, 0);
  rect(xposLinkerSchläger, yposLinkerSchläger, 15, 70);
}

function schläger2() {
  noStroke();
  fill(255, 0, 0);
  rect(xposRechterSchläger, yposRechterSchläger, 15, 70);
}

function mittelline() {
  fill(0, 0, 0);

  rect(198, 50, 5, 30);
  rect(198, 100, 5, 30);
  rect(198, 150, 5, 30);
  rect(198, 200, 5, 30);
  rect(198, 250, 5, 30);
  rect(198, 300, 5, 30);
  rect(198, 350, 5, 30);
  rect(198, 400, 5, 30);
}

function extra() {
  fill(255, 0, 0);
  rect(xposExtraSchläger, yposExtraSchläger, 5, 30);
}

function extra2() {
  fill(255, 0, 0);
  rect(xposExtraSchläger2, yposExtraSchläger2, 5, 30);
}

function bewegungExtraSchläger2() {
  //Runter
  if (yposExtraSchläger2 <= 0 && runter === false) {
    runter = true;
  } else if (yposExtraSchläger2 >= 370 && runter === true) {
    runter = false;
  }
  if (yposExtraSchläger2 >= 0 && runter === true) {
    yposExtraSchläger2 = yposExtraSchläger2 + 2;
  }

  if (yposExtraSchläger2 >= 0 && runter === false) {
    yposExtraSchläger2 = yposExtraSchläger2 - 2;
  }
}

function bewegungExtraSchläger() {
  //Runter
  if (yposExtraSchläger <= 0 && runter === false) {
    runter = true;
  } else if (yposExtraSchläger >= 370 && runter === true) {
    runter = false;
  }
  if (yposExtraSchläger >= 0 && runter === true) {
    yposExtraSchläger = yposExtraSchläger + 2;
  }

  if (yposExtraSchläger >= 0 && runter === false) {
    yposExtraSchläger = yposExtraSchläger - 2;
  }
}

function bewegungSchläger() {
  //Hoch
  if (yposLinkerSchläger > 0 && keyIsDown(87)) {
    yposLinkerSchläger = yposLinkerSchläger - 5;
    //Runter
  } else if (yposLinkerSchläger < 330 && keyIsDown(83)) {
    yposLinkerSchläger = yposLinkerSchläger + 5;
    //Rechts
  } else if (xposLinkerSchläger < 200 && keyIsDown(68)) {
    xposLinkerSchläger = xposLinkerSchläger + 5;
    //Links
  } else if (xposLinkerSchläger > 0 && keyIsDown(65)) {
    xposLinkerSchläger = xposLinkerSchläger - 5;
  }
}

function bewegungSchläger2() {
  if (yposRechterSchläger > 0 && keyIsDown(UP_ARROW)) {
    yposRechterSchläger = yposRechterSchläger - 5;
    //Runter
  } else if (yposRechterSchläger < 330 && keyIsDown(DOWN_ARROW)) {
    yposRechterSchläger = yposRechterSchläger + 5;
    //Rechts
  } else if (xposRechterSchläger < 400 - 15 && keyIsDown(RIGHT_ARROW)) {
    xposRechterSchläger = xposRechterSchläger + 5;
    //Links
  } else if (xposRechterSchläger > 200 && keyIsDown(LEFT_ARROW)) {
    xposRechterSchläger = xposRechterSchläger - 5;
  }
}

function scoreRechts() {
  fill(0, 0, 0);
  textSize(20);
  text("Score  " + scorerechts, 180, 20);
  textSize(15);
  text("Player 1", 340, 20);
}

function scoreLinks() {
  fill(0, 0, 0);
  textSize(20);
  text(+scorelinks, 160, 20);
  textSize(15);
  text("Player 2", 13, 20);
}

function scoreEndeRechts() {
  fill(0, 0, 0);
  textSize(20);
  text("Score  " + scorerechts, 180, 180);
}

function scoreEndeLinks() {
  fill(0, 0, 0);
  textSize(20);
  text(+scorelinks, 160, 180);
}

function pong() {
  textSize(25);
  text("KIRBY", 160, 40);

  textSize(20);
  text("PONG", 170, 70);
}

function food() {
  if (newFood === true) {
    foodX = Math.floor(random(210, 370)); //Rundet die Zahl
    foodY = Math.floor(random(20, 370));
    newFood = false;
  }
  if (newFood2 === true) {
    food2X = Math.floor(random(20, 190)); //Rundet die Zahl
    food2Y = Math.floor(random(20, 370));
    newFood2 = false;
  }

  image(donut, food2X, food2Y, 20, 20);
  image(donut2, foodX, foodY, 20, 20);
}

function eat() {
  hit = collideRectCircle(foodX, foodY, 20, 20, ballX, ballY, 20);
  if (hit === true) {
    newFood = true;
    scorelinks++;
  }
  hit2 = collideRectCircle(food2X, food2Y, 20, 20, ballX, ballY, 20);
  if (hit2 === true) {
    newFood2 = true;
    scorerechts++;
  }
}

function button() {
  fill(255, 193, 193);
  rect(150, 190, 100, 50);
  rect(150, 260, 100, 50);
  fill(0, 0, 0);
  textSize(24);
  textFont("impac");
  text("START", 163, 220);
  text("HILFE", 163, 290);
}

function ballBewegung() {
  if (time > 30) {
    ballX += speedX;
    ballY += speedY;
  }
  if (ballX > 400) {
    // speedX = -speedX;
    ballX = 200;
    ballY = 200;
    time = 0;

    xposRechterSchläger = 390 - 18;
    yposRechterSchläger = 160;
    xposLinkerSchläger = 10;
    yposLinkerSchläger = 160;
    speedX = -speedX;
    scorelinks++; //Score
  } else if (ballX < 0) {
    ballX = 200;
    ballY = 200;
    time = 0;
    xposRechterSchläger = 390 - 18;
    yposRechterSchläger = 160;
    xposLinkerSchläger = 10;
    yposLinkerSchläger = 160;
    speedX = -speedX;
    scorerechts++; //Score
  } else if (ballY < 0) {
    speedY = -speedY;
  } else if (ballY > 400) {
    speedY = -speedY;
  }
  if (
    speedX <= 0 &&
    ballX - 3 <= xposLinkerSchläger + 18 &&
    ballX - 3 >= xposLinkerSchläger &&
    ballY >= yposLinkerSchläger &&
    ballY <= yposLinkerSchläger + 70
  ) {
    speedX = -speedX;
  }
  if (
    speedX <= 400 &&
    ballX - 3 <= xposRechterSchläger + 18 &&
    ballX - 3 >= xposRechterSchläger &&
    ballY >= yposRechterSchläger &&
    ballY <= yposRechterSchläger + 70
  ) {
    speedX = -speedX;
  }
  //Extra Schläger Abprall
  if (
    ballX - 3 <= xposExtraSchläger + 5 &&
    ballX - 3 >= xposExtraSchläger &&
    ballY >= yposExtraSchläger &&
    ballY <= yposExtraSchläger + 30
  ) {
    speedX = -speedX;
  }
  //Extra Schläger 2 Abprall
  if (
    ballX - 3 <= xposExtraSchläger2 + 5 &&
    ballX - 3 >= xposExtraSchläger2 &&
    ballY >= yposExtraSchläger2 &&
    ballY <= yposExtraSchläger2 + 30
  ) {
    speedX = -speedX;
  }
}

function mousePressed() {
  //Button Start
  if (
    mouseX >= 150 &&
    mouseY <= 230 &&
    mouseX <= 250 &&
    mouseY >= 190 &&
    startscreen === true
  ) {
    start = true;
    startscreen = false;
  }
  //Button Hilfe
  if (
    mouseX >= 150 &&
    mouseY >= 250 &&
    mouseX <= 250 &&
    mouseY <= 310 &&
    startscreen === true
  ) {
    startscreen = true;
    start = false;
    hilfe = true;
  }
  //Button zurück
  if (
    mouseX >= 80 &&
    mouseX <= 140 &&
    mouseY >= 260 &&
    mouseY <= 310 &&
    hilfe === true
  ) {
    hilfe = false;
    startscreen = true;
  }

  //Button Menu
  if (
    mouseX >= 160 &&
    mouseX <= 230 &&
    mouseY >= 220 &&
    mouseY <= 260 &&
    endscreen === true
  ) {
    endscreen = false;
    startscreen = true;
  }

  //Reset
  if (
    mouseX >= 160 &&
    mouseX <= 230 &&
    mouseY >= 270 &&
    mouseY <= 310 &&
    endscreen === true
  ) {
    endscreen = false;
    start = true;
    scorerechts = 0;
    scorelinks = 0;
  }
}

function Hilfe(ballX, ballY, scale) {
  //Arme
  //Links
  noStroke();
  push();

  fill(255, 174, 185);
  translate(ballX - 40 * scale, ballY);
  rotate(-1.9);
  arc(0, 0, 37 * scale, 60 * scale, PI, 0, CHORD);
  pop();

  //Rechts
  push();
  fill(255, 174, 185);
  translate(ballX + 40 * scale, ballY);
  rotate(1.9);
  arc(0, 0, 37 * scale, 60 * scale, PI, 0, CHORD);
  pop();

  //Füße
  push();

  fill(230, 0, 0);
  translate(ballX - 25 * scale, ballY + 30 * scale);
  rotate(3.5);
  arc(0, 0, 43 * scale, 65 * scale, PI, 0, CHORD);
  pop();

  push();
  fill(230, 0, 0);
  translate(ballX + 25 * scale, ballY + 30 * scale);
  rotate(-3.5);
  arc(0, 0, 43 * scale, 65 * scale, PI, 0, CHORD);
  pop();

  fill(255, 174, 185);
  ellipse(ballX, ballY, 100 * scale, 100 * scale); //Kopf
  fill(0, 0, 0);

  textSize(24);
  textFont("impac");
  text("HILFE", 163, 50);
  //Steuerung Links
  rect(100, 120, 20, 20);
  rect(100, 145, 20, 20);
  rect(75, 145, 20, 20);
  rect(125, 145, 20, 20);
  //Steuerung Rechts
  rect(100, 180, 20, 20);
  rect(100, 205, 20, 20);
  rect(75, 205, 20, 20);
  rect(125, 205, 20, 20);

  fill(255, 255, 255);
  textSize(10);

  text("W", 106, 135);
  text("S", 108, 160);
  text("A", 82, 160);
  text("D", 132, 160);

  text("⬆", 106, 195);
  text("⬇", 106, 220);
  text("⬅", 82, 220);
  text("➡", 132, 220);
  //Zurück Button
  rect(85, 250, 50, 30);
  fill(0, 0, 0);
  text("Zurück", 95, 268);
  //Anleitung
  fill(0, 0, 0);
  textSize(10);
  text("Bewege den linken Schläger mit hilfe dieser Tasten", 155, 140);
  text("W, S, A, D", 155, 155);
  text("Bewege den rechten Schläger mit hilfe der Pfeiltasten ", 155, 200);
  //Ziel
  text(
    "Beide Spieler steuern einen Schläger, welcher sich sowohl nach ",
    75,
    75
  );
  text("oben/unten als auch nach rechts/links bewegen lässt.", 75, 85);
  text("Lässt man den Ball am Schläger vorbei fliegen, so erhält der", 75, 95);
  text("einen Punkt.", 75, 105);
  //Bonus
  textSize(15);
  text("Bonus", 220, 230);
  textSize(10);
  text("Donuts aus der jeweils Gegnerischen Hälfte ", 155, 257);
  text("bringen Zusatzpunkte. Aber vorsicht! Sammelt", 155, 269);
  text("man die aus der eigenen Hälfte ein, so erhält ", 155, 280);
  text("der Gegner den Punkt.", 155, 290);

  image(donut, 200, 310, 30, 30);
  image(donut2, 165, 310, 30, 30);
}
//Nach 5 punkten neustart
function reset() {
  if (scorerechts === 5 || scorelinks === 5) {
    start = false;
    endscreen = true;
  }
}

function buttonEndGame() {
  fill(255, 193, 193);
  rect(160, 220, 80, 40);
  fill(0, 0, 0);
  textSize(20);
  text("MENÜ", 170, 245);
  fill(255, 193, 193);
  rect(160, 270, 80, 40);
  fill(0, 0, 0);
  text("RESET", 170, 295);
}

function EndScreen(ballX, ballY, scale) {
  //Arme
  //Links
  noStroke();
  push();

  fill(255, 174, 185);
  translate(ballX - 40 * scale, ballY);
  rotate(-1.9);
  arc(0, 0, 37 * scale, 60 * scale, PI, 0, CHORD);
  pop();

  //Rechts
  push();
  fill(255, 174, 185);
  translate(ballX + 40 * scale, ballY);
  rotate(1.9);
  arc(0, 0, 37 * scale, 60 * scale, PI, 0, CHORD);
  pop();

  //Füße
  push();

  fill(230, 0, 0);
  translate(ballX - 25 * scale, ballY + 30 * scale);
  rotate(3.5);
  arc(0, 0, 43 * scale, 65 * scale, PI, 0, CHORD);
  pop();

  push();
  fill(230, 0, 0);
  translate(ballX + 25 * scale, ballY + 30 * scale);
  rotate(-3.5);
  arc(0, 0, 43 * scale, 65 * scale, PI, 0, CHORD);
  pop();

  fill(255, 174, 185);
  ellipse(ballX, ballY, 100 * scale, 100 * scale); //Kopf
  fill(0, 0, 0);

  textSize(50);
  textFont("impac");
  text("End", 160, 80);
}

function draw() {
  clear();
  image(hintergrund, 0, 0, 400, 400);

  //console.log("X  " + mouseX + "   Y  " + mouseY);
  if (startscreen === true) {
    kirby2(200, 180, 3.5);
    scorerechts = 0;
    scorelinks = 0;
    button();
    pong();
  }

  if (endscreen === true) {
    EndScreen(200, 180, 3.5);
    buttonEndGame();
    scoreEndeRechts();
    scoreEndeLinks();

    if (scorerechts === 5) {
      text("Player 1 hat gewonnen", 110, 120);
    } else if (scorelinks === 5) {
      text("Player  2 hat gewonnen", 110, 120);
    }
  }

  if (hilfe === true && start === false) {
    startscreen = false;
    Hilfe(200, 180, 3.5);
  }

  if (start === true) {
    schläger();
    schläger2();
    mittelline();
    extra();
    extra2();
    kirby(ballX, ballY, 0.2);
    bewegungSchläger();
    bewegungSchläger2();
    bewegungExtraSchläger();
    bewegungExtraSchläger2();
    ballBewegung();
    scoreLinks();
    scoreRechts();
    food();
    reset();
    eat();
    time++;
  }
}
