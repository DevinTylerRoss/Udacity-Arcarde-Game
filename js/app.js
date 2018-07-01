// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    //set enemy initial location
    this.x = x;
    this.y = y;
    //set the enemy speed
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    this.x += this.speed * dt;
    // which will ensure the game runs at the same speed for
    // all computers.
    //updates the enemy location
    if(this.x > 400){
      this.x = -50;
    }
    //handle collision with the player
	if( player.x < this.x + 60 && player.x + 37 > this.x &&
		player.y < this.y + 25 && 30 + player.y > this.y 
	){
		player.x = 400;
		player.y = 400;
		
	}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x,y,speed) {
  this.sprite = "images/char-cat-girl.png";
  this.x = x;
  this.y = y;
  this.speed = speed;
}

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //updates the player location
    //handle collision with the enemy
	if(this.y === 25){
		bringUpModal();
		this.y = 400;
	}
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now instantiate your objects.

const enemy1 = new Enemy(50, 150, 100);

const enemy2 = new Enemy(75, 75, 50);

const enemy3 = new Enemy(25, 25, 150);

const enemy4 = new Enemy(25, 225, 200);

// Place all enemy objects in an array called allEnemies
let allEnemies = [enemy1, enemy2, enemy3, enemy4];
// Place the player object in a variable called player
let player = new Player(400, 400, 20);



Player.prototype.handleInput = function(allowedKeys){
  
  if(allowedKeys === 'down' && this.y < 425){
    this.y += 25;
	console.log(this.x);
	console.log(this.y);
  }

		if (allowedKeys === 'up'){
			this.y -= 25;
			console.log(this.x);
	console.log(this.y);
		}
		
		if(allowedKeys === 'left' && this.x > 0){
			this.x -= 25;
			console.log(this.x);
	console.log(this.y);
		}
		
		if(allowedKeys === 'right' && this.x < 400){
			this.x += 25;
			console.log(this.x);
	console.log(this.y);
		}
  
};

//Modal code

const giantX = document.querySelector('.giantX');
const modal = document.getElementById('myModal');

giantX.addEventListener('click', function() {
    modal.classList.remove('modal-visible');
});

function bringUpModal() {
  

    modal.classList.add('modal-visible');
}


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
