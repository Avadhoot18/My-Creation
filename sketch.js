var form;

function setup() {
  createCanvas(displayWidth,displayHeight);
  form = new Form();
}

function draw() {
  background("red");  
  form.display();
  drawSprites();
}