class Entity {

  constructor(){
    this.spirit = 'images/';
    this.x = 2;
    this.y = 5;
  }

  render(){
    ctx.drawImage(Resources.get(this.sprite), this.x * 101, this.y * 83);
  }

  update(){
    this.isOutOfBoundsX = this.x > 5;
    this.isOutOfBoundsY = this.y < 1;
  }

}

class Player extends Entity {
  constructor(){
    super();
    this.sprite += 'char-boy.png';

  }
}

class Enemy extends Entity {
  constructor(x,y){
    super();
    this.sprite += 'enemy-bug.png';
    this.x = x;
    this.y = y;
  }

  update(dt){
    super.update();
    if(this.isOutOfBoundsX){
      this.x = -1;
    }
    else {
      this.x += dt;
    }
  }

}


const player = new Player();

const allEnemies = [...Array(3)].map((_,i)=> new Enemy(0,i+1));

Player.prototype.handleInput = function(){


};

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode])
});
