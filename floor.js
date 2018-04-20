function Floor(){

  this.space = 100;

  this.w1 = random(0, width - this.space);
  this.left = width - (this.w1 + this.space);

  this.y = 0;
  this.x = 0;
  this.h = 20;

  this.show = function() {
    fill(255);
    rect(this.x, this.y, this.w1, this.h);
    rect(width - this.left, this.y, this.left, this.h);
  }

  this.update = function() {
    this.y += speed;
  }

  this.offscreen = function(){
    if(this.y > height){
      return true;
    }
  }
}