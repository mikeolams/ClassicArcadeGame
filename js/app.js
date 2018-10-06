//setting global parameters
let count = 0;
// Enemies our player must avoid
class Enemy {
    constructor(corX, corY, velocity) {
        this.sprite = 'images/enemy-bug.png';
        this.corX = corX;
        this.corY = corY;
        this.velocity = velocity;
    }
    update(dt) {
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
        this.corX += this.velocity * dt;
        if (this.corX > 610) {
            count += 1
            if (count < 4) {
                this.corX = Math.floor(Math.random()) * (-300);
                this.velocity = 400 + Math.floor(Math.random() * 300);
            }
            // delay the enemy at old number by 3sec;
            if (count % 2 == 0) {
                this.corX = -300;
                this.velocity = 0;
                setTimeout(() => {
                    this.velocity = 393.5;
                }, 3000);
            } else {
                this.corX = Math.floor(Math.random()) * (-300);
                this.velocity = 400 + Math.floor(Math.random() * 60);
            }
            //to create a dynamic velocity variation
            if (count > 9 && count < 25) {
                this.velocity *= 2;
                this.corX = -200;
            } else if (count == 25) {
                count = 0;
            } else {
                count;
            }
        }
    };
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.corX, this.corY);
    };
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
//making playerimage subclass of the enemy class to avoid repitetion of similar properties and methods
class PlayerImage extends Enemy {
    constructor(corX, corY) {
        super(corX, corY);
        this.sprite = 'images/char-pink-girl.png';
    }
    //defining special update method for player
    update() {
        for (let i = 0; i < allEnemies.length; i++) {
            if (true) {
                let count = 0;
                count++;
                // defining the collision action for each rows
                if (allEnemies[i].corX >= this.corX - 85 && allEnemies[i].corX <= this.corX + 50) {
                    if (allEnemies[i].corY == 64 && (this.corY < 145 && this.corY > 0)) {
                        for (let j = 0; j < 500; j += 100) {
                            if (this.corX == j) {
                                this.corX = j;
                                this.corY = 435
                            }
                        }
                    } else if (allEnemies[i].corY == 147 && (this.corY < 227 && this.corY > 85)) {
                        for (let j = 0; j < 500; j += 100) {
                            if (this.corX == j) {
                                this.corX = j;
                                this.corY = 435
                            }
                        }
                    } else if (allEnemies[i].corY == 230 && (this.corY > 168 && this.corY < 310)) {
                        for (let j = 0; j < 500; j += 100) {
                            if (this.corX == j) {
                                this.corX = j;
                                this.corY = 435
                            }
                        }
                    } else {
                        //Action defined for game completion
                        if (this.corY == -9) {
                            console.log(`well done`);
                            swal({
                                title: "Good job! Congratulations!!!",
                                text: "You made great effort! \n by completed the game after careful moves \n Well done!!!",
                                icon: "success",
                            });
                            setTimeout(() => {
                                this.corX = 200;
                                this.corY = 435;
                                count = 0;
                            }, 900);
                        }
                    }
                }
            }
        }
    }
    //calling the super class render method to draw the player on the screen
    render() {
        super.render();
    }
    //defining unique method specifically for player input response
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
                        //do nothing
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