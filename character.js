function Character(){
  this.x = 0;
  this.y = height / 3;

  this.gravity = 0.2;
  this.power = -5;

  this.spriteHeight = 32;
  this.spriteWidth = 16;

  this.char = createSprite(this.x, this.y - this.spriteHeight, this.spriteWidth, this.spriteHeight);
  this.runAnim = this.char.addAnimation("run", "assets/2.png", "assets/3.png", "assets/4.png");
  this.runAnim.offY = 16;
  this.char.addAnimation("jump", "assets/6.png", "assets/salto.png", "assets/1.png");

  this.jump = function(){
    this.char.velocity.y = this.power;
    this.char.changeAnimation("jump");
  }
  
  this.update = function() {
    drawSprites();

    this.char.velocity.y += this.gravity;

    if(this.char.position.y >= height){
      this.char.position.y = height - this.spriteHeight;
      this.char.velocity.y = 0;
      console.log("You lost");
    }

    if(this.y < 0){
      this.y = 0;
    }
  }
}