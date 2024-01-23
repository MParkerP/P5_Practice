function setup() {
  createCanvas(365, 1500);
}

function draw() {
  //EXAMPLE 1

  //background
  strokeWeight(0);
  fill(91, 240, 86);
  rect(0,0,365,180);
  
  //circle
  stroke('black');
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
  rect(0,635,365,410);

  //green circle
  fill('green');
  stroke('white');
  strokeWeight(4);
  circle(176,827,167);

  //red star
  strokeWeight(0);
  fill('red');
  triangle(175,740, 155,800, 195,800);//head
  triangle(155,800, 95,800, 140,840);//leftarm
  triangle(195,800, 255,800, 210,840);//rightarm
  triangle(140,840, 120,890, 175,865);//leftleg
  triangle(210,840, 175,865, 230,895);//rightleg

  //inside of star
  triangle(155,800,195,800,140,840);
  triangle(140,840,210,840,175,865);
  triangle(195,800,210,840,140,840);
  strokeWeight(2);
  stroke('red');
  line(155,800,140,840);
  line(195,800,140,840);
  line(195,800,210,840);
  line(210,840,175,865);
  line(140,840,175,865);
  

  //star outline
  strokeWeight(4);
  stroke('white');
  line(175,740,195,800);
  line(195,800,255,800);
  line(256,800,210,840);
  line(210,840,230,895);
  line(230,895,175,865);
  line(175,865,120,890);
  line(119,891,140,840);
  line(140,840,95,800);
  line(95,800,155,800);
  line(155,800,175,740);

  
 


}
