var character;
var points = 0;
var floors = [];
var speed = 1;

function setup(){
  createCanvas(640, 480);
  character = new Character();
  floors.push(new Floor());
}

function draw(){
  background(0);
  
  for(var i = floors.length-1; i >= 0; i--) {
    floors[i].show();
    floors[i].update();

    if(character.x <= floors[i].w1 || character.x >= width - floors[i].left){
      if(character.y - floors[i].h - character.size / 2 == floors[i].y){
        character.y += speed;
      }
    }

    if(character.y + character.size / 2 >= floors[i].y && character.y - character.size / 2 <= floors[i].y + floors[i].h){
      if(round(character.x - character.size / 2) <= round(floors[i].w1)){
        character.x = floors[i].w1 + character.size / 2;
      }
      if(round(character.x + character.size / 2) >= round(width - floors[i].left)){
        character.x = width - floors[i].left - character.size / 2;
      }
    }
    
    if(floors[i].offscreen()) {
      floors.splice(i, 1);
    }
  }

  character.show();
  character.update();
  
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