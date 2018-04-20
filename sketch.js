var character;
var points = 0;

function setup() {
  createCanvas(640, 480);
  character = new Character();
}

function draw() {
  background(0);
  
  character.update();
  character.show();

  if(keyIsDown(LEFT_ARROW)){
    character.left();
  }

  if(keyIsDown(RIGHT_ARROW)){
    character.right();
  }

  if (frameCount % 75 == 0) {
    points++;
  }
  text(points, 10, 20);  
}

function keyPressed(){
  if(keyCode == 32 || keyCode == 38){
    character.jump();
  }
}