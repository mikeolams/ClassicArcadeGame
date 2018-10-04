// Enemies our player must avoid
var Enemy = function(corX,corY,velocity) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.corX =corX;
    this.corY=corY;
    this.velocity =velocity;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
let count =0;
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
       this.corX += this.velocity * dt;
       if(this.corX > 505) {
            count+=1
            if (count<4){
                this.corX = Math.floor(Math.random())*(-200);
                this.velocity = 400 + Math.floor(Math.random() *300); 
            }
             // delay the enemy at old number by 3sec;
            if ( count%2 == 0 ){
                this.corX = -300;
                this.velocity =0;
                setTimeout(() => {
                this.velocity = 393.5;
                this.corX = -200;
            }, 3000);
            }else {
            this.corX = Math.floor(Math.random())*(-300);
            // console.log(this.corX);
            // console.log(count);
            this.velocity = 300 + Math.floor(Math.random() *50);
            }
            if (count ===10){count =0;
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
    constructor(corX,corY){
        this.corX = corX;
        this.corY = corY;
        this.person = 'images/char-pink-girl.png';
        // this.person ='images/char-boy.png';
        // this.person ='char-cat-girl.png';

        // char-princess-girl.png char-pink-girl.png   char-boy.png char-horn-girl.png char-cat-girl.png
    }

    update(){
         // if (this.corY == (for (enemy of allEnemies){allEnemies[item]} )) {console.log(`popo`)}
        // if ((for (enemy of allEnemies){allEnemies[enemy]} )) {console.log(`popo`)}
         if (this.corY >=200) {
            // console.log(`coordinate ${this.corX} ${this.corY}`)
            // reset();

            for(let i=0; i<allEnemies.length; i++){if (true){let count =0; 
                count++;
                // allEnemies[i].corY;
                // allEnemies[i].corX;
                if(allEnemies[i].corY == player.corY ){console.log(`y`, count,i)}
                if(allEnemies[i].corX == player.corX ){console.log(`x`, count,i)}

                // console.log(count,i, allEnemies[i].corY, allEnemies[i].corX)
            }}
                player.corX;
                player.corY;
        }

    }

    render(){
        ctx.drawImage(Resources.get(this.person), this.corX, this.corY);
    }

    handleInput(input){
        if(input == "left"){ 
            // console.log(this.corX);
           if (this.corX >0 && this.corX<=400 ){
            // if(this.corX ==400){this.corX =400;}
            // if(this.corX==0){this.corX =0;}
            this.corX -= 100;
        } 
        }else if(input =='right'){
            // console.log(this.corX);
            if (this.corX >=0 && this.corX<400 ){
                // if(this.corX ==400){this.corX =400;}
            // if(this.corX ==0){this.corX =0;}
            this.corX += 100;
            }


        }else if (input =='down'){
            // console.log(this.corY);
            if ((this.corY >=-9) && this.corY<411){
            if (this.corY==435){
                this.corY += 110;
                // console.log(this.corY);
            }else if(this.corY==73){
                this.corY += 82;
                // console.log(this.corY);
            }else{
                this.corY += 84;
                // console.log(this.corY);
            }
            }
        }else if (input =='up'){
            // console.log(this.corY);
            if ((this.corY >-9) && this.corY<=435 ){
            if (this.corY==435){
                // console.log(this.corY);
                this.corY -= 110;
            }else if(this.corY==73){
                this.corY -= 82;
                // console.log(this.corY);
            }else{
                this.corY -= 84;
                // console.log(this.corY);
            }
        }
        }else{/*do nothing for*/}
    }
}

// if(allowedKeys[e.keyCode] == "left"){ 
//             this.corX += 50;
//         }else if(allowedKeys[e.keyCode] =='right'){
//             this.corX -= 50;
//         }else if (allowedKeys[e.keyCode]=='down'){
//             this.corY += 50;
//         }else if (allowedKeys[e.keyCode]=='up'){
//             this.corY -= 50;
//         }else{let u=1;}
//     }
// if(this.allowedKeys[39]){ 
//             this.corX += 50;
//         }else if(this.allowedKeys[37]){
//             this.corX -= 50;
//         }else if (this.allowedKeys[40]){
//             this.corY += 50;
//         }else if (this.allowedKeys[38]){
//             this.corY -= 50;
//         }else{let u=1;}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies

//setting the array list for enemies
const allEnemies = [];
// Instantiate each enemy objects
const enemyOne = new Enemy(-100,64, Math.random()* 700);
    allEnemies.push(enemyOne),
      enemyTwo = new Enemy(-150, 147, Math.random()* 700),
allEnemies.push(enemyTwo),
      enemyThree = new Enemy(-50, 230, Math.random()* 700),
allEnemies.push(enemyThree),
      enemyFour = new Enemy(-300,64, Math.random()* 700),
allEnemies.push(enemyFour),
      enemyFive = new Enemy(-150, 230, Math.random()* 700),
allEnemies.push(enemyFive);

// Place the player object in a variable called player
// Instantiate the player object
const player = new PlayerImage(200,435);



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
