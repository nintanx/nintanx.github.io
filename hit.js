var hit = false;

circle(30, 30, 10);
circle(60, 30, 10);

function draw() {
  hit = collideCircleCircle(30, 30, 10, 60, 30, 10);
  console.log(hit);
}
