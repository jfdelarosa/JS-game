function Character(){
  this.direction;

  this.x = width / 2;
  this.y = height / 2;

  this.accel = 6;
  
  this.size = 32;
  this.standing = false;
  
  this.show = function() {
    fill(255);
    ellipse(this.x, this.y, this.size, this.size);
  }

  this.left = function(){
    this.x -= this.accel;
  }
  
  this.right = function(){
    this.x += this.accel;
  }
  
  this.update = function() {
    if(this.x > width){
      this.x = width;
    }

    if(this.x < 0){
      this.x = 0;
    }

    if (this.y >= height) {
      this.y = height;
      console.log("You lost");
    }

    if (this.y < 0) {
      this.y = 0;
    }
  }
}