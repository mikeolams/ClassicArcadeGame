// Enemies our player must avoid
var Enemy = function(corX, corY, velocity) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.corX = corX;
    this.corY = corY;
    this.velocity = velocity;
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
let count = 0;
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.corX += this.velocity * dt;
    if (this.corX > 505) {
        count += 1
        if (count < 4) {
            this.corX = Math.floor(Math.random()) * (-200);
            this.velocity = 400 + Math.floor(Math.random() * 300);
        }
        // delay the enemy at old number by 3sec;
        if (count % 2 == 0) {
            this.corX = -300;
            this.velocity = 0;
            setTimeout(() => {
                this.velocity = 393.5;
                this.corX = -200;
            }, 3000);
        } else {
            this.corX = Math.floor(Math.random()) * (-300);
            this.velocity = 300 + Math.floor(Math.random() * 50);
        }
        if (count === 10) {
            count = 0;
        }
    }
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.corX, this.corY);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
class PlayerImage {
    constructor(corX, corY) {
        this.corX = corX;
        this.corY = corY;
        this.person = 'images/char-pink-girl.png';
    }
    update() {
        // reset();
        for (let i = 0; i < allEnemies.length; i++) {
            if (true) {
                let count = 0;
                count++;
                if (allEnemies[i].corX >= player.corX - 12) {
                    if (allEnemies[i].corY == 64 && (player.corY > 70 && player.corY < 110)) {
                        for (let j = 0; j < 500; j += 100) {
                            if (player.corX == j) {
                                player.corX = j;
                                player.corY = 435
                            }
                        }
                    } else if (allEnemies[i].corY == 147 && (player.corY > 150 && player.corY < 186)) {
                        for (let j = 0; j < 500; j += 100) {
                            if (player.corX == j) {
                                player.corX = j;
                                player.corY = 435
                            }
                        }
                    } else if (allEnemies[i].corY == 230 && (player.corY > 236 && player.corY < 244)) {
                        for (let j = 0; j < 500; j += 100) {
                            if (player.corX == j) {
                                player.corX = j;
                                player.corY = 435
                            }
                        }
                    } else { /*do nothing*/ }
                }
            }
        }
        if (player.corY == -9) {
            swal({
                title: "Good job! Congratulations!!!",
                text: "You made great effort! \n by completed the game after careful moves \n Well done!!!",
                icon: "success",
            });
            setTimeout(() => {
                player.corX = 200;
                player.corY = 435;
            }, 1000);
        }
    }
    render() {
        ctx.drawImage(Resources.get(this.person), this.corX, this.corY);
    }
    handleInput(input) {
        if (input == "left") {
            if (this.corX > 0 && this.corX <= 400) {
                this.corX -= 100;
            }
        } else if (input == 'right') {
            if (this.corX >= 0 && this.corX < 400) {
                this.corX += 100;
            }
        } else if (input == 'down') {
            if ((this.corY >= -9) && this.corY < 411) {
                if (this.corY == 435) {
                    this.corY += 110;
                } else if (this.corY == 73) {
                    this.corY += 82;
                } else {
                    if (this.corY >= 400) {
                        //do thing
                    } else {
                        this.corY += 84;
                    }
                }
            }
        } else if (input == 'up') {
            if ((this.corY > -9) && this.corY <= 435) {
                if (this.corY == 435) {
                    this.corY -= 110;
                } else if (this.corY == 73) {
                    this.corY -= 82;
                } else {
                    this.corY -= 84;
                }
            }
        } else { /*do nothing for*/ }
    }
}
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
//setting the array list for enemies
const allEnemies = [];
// Instantiate each enemy objects
const enemyOne = new Enemy(-100, 64, Math.random() * 700);
allEnemies.push(enemyOne),
    enemyTwo = new Enemy(-150, 147, Math.random() * 700),
    allEnemies.push(enemyTwo),
    enemyThree = new Enemy(-50, 230, Math.random() * 700),
    allEnemies.push(enemyThree),
    enemyFour = new Enemy(-300, 64, Math.random() * 700),
    allEnemies.push(enemyFour),
    enemyFive = new Enemy(-150, 230, Math.random() * 700),
    allEnemies.push(enemyFive);
// Place the player object in a variable called player
// Instantiate the player object
const player = new PlayerImage(200, 435);
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});