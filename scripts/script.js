//Spiral time clocks comparing how an adult and a child experience time. 

let angle = 0.0;
let offset = 300;
let scalar = 10;
let speed = 1;
let age = 35;

function setup() {
  createCanvas(600, 600);
  fill(0);
}

function draw() {
  let x = offset + cos(angle) * scalar;
  let y = offset + sin(angle) * scalar;
  
  if (age<18) {
  angle += speed*.04;
  scalar += speed*.04;
  ellipse( x, y, 2, 2);
  }
  
  if (age>18) {
  angle += speed*.2;
  scalar += speed*.2;
  ellipse( x, y, 2, 2);
  }
 
}