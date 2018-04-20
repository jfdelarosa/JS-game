function Character(){
  this.x = width / 2;
  this.y = height / 2;

  this.accel = 10;
  
  this.lift = -20;
  this.gravity = 0.8;
  this.velocity = 0;
  
  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, 32, 32);
  }

  this.left = function(){
    this.x -= this.accel;
  }
  
  this.right = function(){
    this.x += this.accel;
  }
  
  this.jump = function(){
    this.velocity += this.lift;
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;   

    if(this.x > width){
      this.x = width;
    }

    if(this.x < 0){
      this.x = 0;
    }

    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

    if (this.y < 0) {
      this.y = 0;
      this.velocity = 0;
    }
  }
}