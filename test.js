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
}

Hilfe(200, 180, 3.5);
