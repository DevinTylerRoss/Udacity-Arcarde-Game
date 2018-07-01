// Enemies our player must avoid
var Enemy = function(x,y, speed) {
    
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
    
    this.x += this.speed * dt;
    
    //updates the enemy location so they can cross the screen again
    if(this.x > 500){
      this.x = -75;
    }
    // Handles collision with the player. Player position reset if bugs are touched
	// Credit due to this resource: MDN Web Docs @ https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
	if( player.x < this.x + 60 && player.x + 37 > this.x &&
		player.y < this.y + 25 && 30 + player.y > this.y 
	){
		player.x = 400;
		player.y = 400;
		
	}
};

// Draws an enemy on screen
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Creates Player class
var Player = function (x,y,speed) {
  this.sprite = "images/char-cat-girl.png";
  this.x = x;
  this.y = y;
  this.speed = speed;
}

// Triggers modal popup when player reaches the water
Player.prototype.update = function(dt) {
    
	if(this.y === 25){
		bringUpModal();
		this.y = 400;
	}
};

// Draws player on screen
Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// Now instantiate your objects.

const enemy1 = new Enemy(25, 150, 100);

const enemy2 = new Enemy(25, 75, 50);

const enemy3 = new Enemy(25, 25, 150);

const enemy4 = new Enemy(25, 225, 200);

// Place all enemy objects in an array called allEnemies
let allEnemies = [enemy1, enemy2, enemy3, enemy4];
// Place the player object in a variable called player
let player = new Player(400, 400, 20);


// Connects keyboard input to player movement
// If statements prevent player movement off screen
Player.prototype.handleInput = function(allowedKeys){
  
  if(allowedKeys === 'down' && this.y < 425){
    this.y += 25;
	
  }

		if (allowedKeys === 'up'){
			this.y -= 25;
		}
		
		if(allowedKeys === 'left' && this.x > 0){
			this.x -= 25;
		}
		
		if(allowedKeys === 'right' && this.x < 400){
			this.x += 25;
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
// Player.handleInput() method.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode])
});
