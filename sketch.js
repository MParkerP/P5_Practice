function setup() {
  createCanvas(365, 1000);
}

function draw() {
  //EXAMPLE 1

  //background
  strokeWeight(0);
  fill(91, 240, 86);
  rect(0,0,365,180);
  
  //circle
  strokeWeight(2);
  fill('white');
  circle(90,90,150);
  
  //square
  square(200, 15, 150);



  //EXAMPLE 2
  
  //background
  strokeWeight(0);
  fill('white');
  rect(0,180,365,275);

  //red circle
  fill(255,0,0,75);
  strokeWeight(0);
  circle(180,275,150);
  //blue circle
  fill(0,0,255,75);
  circle(125,350,150);
  //green circle
  fill(0,255,0,75);
  circle(235,350,150);



  //EXAMPLE 3

  //background
  fill('black');
  rect(0,455,365,180);

  //ghost
  fill('red');
  circle(270, 545, 150);
  rect(195,545, 150, 75);
  fill('white');
  circle(310, 545,50);
  fill('blue');
  circle(310, 545,30);
  fill('white');
  circle(233, 545,50);
  fill('blue');
  circle(233, 545,30);

  //pacman
  fill('yellow');
  circle(90,545,150);
  fill('black');
  triangle(90,545,10,470,10,620)



  //EXAMPLE 4

  //background
  fill(21, 40, 125);
  rect(0,635,365,425);
  fill('green');
  stroke('white');
  strokeWeight(5);
  circle(175,815,150)

}
