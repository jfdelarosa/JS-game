var character = {};
var points = 0;
var floors;
var speed = 2;
var currentPos;

function setup(){
  createCanvas(600, 400);
  character = new Character();
  floors = new Group();
  currentPos = width / 3;
  setInterval(function(){
    points++;
  }, 1000);
}

function draw(){
  background(0);
  character.char.position.x += speed;
  camera.position.x = character.char.position.x + width / 3;

  //character.char.collide(floors);

  
  for(var i = floors.length-1; i >= 0; i--) {
    if(character.char.collide(floors[i])){
      character.char.velocity.y = 0;
    }
    if(floors[i].position.x < character.char.position.x - width) {
      floors[i].remove();
    }
  }
  
  character.update();
  if(floors.length < 5){
    var fl = new Floor(currentPos);
    floors.add(fl.floor);
    currentPos += fl.w;
  }
  fill(255, 204, 0);
  text(points, camera.position.x, 20); 
}

function keyPressed(){
  if(keyCode == 32 || keyCode == 38){
    character.jump();
  }
}