var character;
var points = 0;
var floors = [];

function setup() {
  createCanvas(640, 480);
  character = new Character();
}

function draw() {
  background(0);
  
  for (var i = floors.length-1; i >= 0; i--) {
    floors[i].show();
    floors[i].update();

    if (floors[i].offscreen()) {
      floors.splice(i, 1);
    }
  }

  character.update();
  character.show();

  if(keyIsDown(LEFT_ARROW)){
    character.left();
  }

  if(keyIsDown(RIGHT_ARROW)){
    character.right();
  }

  if (frameCount % 100 == 0) {
    points++;
    floors.push(new Floor());
  }
  text(points, 10, 20);  
}

function keyPressed(){
  if(keyCode == 32 || keyCode == 38){
    character.jump();
  }
}