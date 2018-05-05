function Floor(pos){
  this.w = int(random(width/2, width));
  this.h = 32;
  this.y = (2 * height / 3) + random(-100, 100);
  this.x = pos;

  this.speed = 2;

  this.floor = createSprite(this.x, this.y, this.w, this.h);
//  this.floor.addImage(loadImage("assets/floor.png"));

}