var hr, sc, mn;
var hrAngle, scAngle, mnAngle;

function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background("black");  
  translate(200,200);
  rotate(-90);
  hr = hour();
  sc = second();
  mn = minute();
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr %12,0,12,0,360);
  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke("blue");
  strokeWeight(7);
  line(0,0,75,0);
  pop();

  push();
  rotate(hrAngle);
  stroke("green");
  strokeWeight(7);
  line(0,0,50,0);
  pop();

  stroke(255,0,255);
  point(0,0);
  strokeWeight(10);
  noFill();
  stroke("red");
  arc(0,0,300,300,0, scAngle);
  stroke("blue");
  arc(0,0,280,280,0, mnAngle);
  stroke("green");
  arc(0,0,260,260,0, hrAngle);

  drawSprites();
}