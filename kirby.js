var ballX = 200;
var ballY = 200;

function kirby(ballX, ballY) {
  //Arme
  //Links
  push();

  fill(255, 174, 185);
  translate(ballX - 40, ballY);
  rotate(-1.9);
  arc(ballX - 200, ballY - 200, 37, 60, PI, 0, CHORD);
  pop();

  //Rechts
  push();
  fill(255, 174, 185);
  translate(ballX + 40, ballY);
  rotate(1.9);
  arc(ballX - 200, ballY - 200, 37, 60, PI, 0, CHORD);
  pop();

  //Füße
  push();

  fill(230, 0, 0);
  translate(ballX - 25, ballY + 30);
  rotate(3.5);
  arc(ballX - 200, ballY - 200, 43, 65, PI, 0, CHORD);
  pop();

  push();
  fill(230, 0, 0);
  translate(ballX + 25, ballY + 30);
  rotate(-3.5);
  arc(ballX - 200, ballY - 200, 43, 65, PI, 0, CHORD);
  pop();

  fill(255, 174, 185);
  ellipse(ballX, ballY, 100, 100); //Kopf
  fill(0, 0, 0);
  ellipse(ballX - 10, 186, 12, 25); //Linkes Auge Außen
  ellipse(ballX + 10, 186, 12, 25); //Rechtes Auge Außen
  fill(255, 255, 255);
  ellipse(ballX - 10, ballY - 20, 7, 11); //Linkes Auge Innen oben
  ellipse(ballX + 10, ballY - 20, 7, 11); //Rechtes Auge Innen oben
  fill(30, 144, 255);
  arc(ballX - 10, ballY - 11, 9, 16, 0, PI, CHORD); //Linkes Auge Innen unten
  arc(ballX + 10, 189, 9, 16, 0, PI, CHORD); //Rechtes Auge Innen Rechts
  noStroke();
  fill(0, 0, 0);
  ellipse(ballX - 10, 189, 8, 5); //Links
  ellipse(ballX + 10, 189, 8, 5); //Rechts

  //Mund
  fill(210, 0, 0);
  ellipse(ballX, ballY + 25, 36, 38);
  fill(220, 60, 60);
  ellipse(ballX - 1, ballY + 30, 27, 24);

  //Wangen
  fill(255, 110, 180);
  ellipse(ballX - 25, ballY, 15, 10);
  ellipse(ballX + 25, ballY, 15, 10);
}

function draw() {
  console.log("X  " + mouseX + "   Y  " + mouseY);
  kirby(ballX, ballY);
}
