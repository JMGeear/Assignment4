/// <reference path="../objects/bird.ts" />
/// <reference path="../objects/bullet.ts" />
module managers {
    export class BulletManager {
        game: createjs.Container;
        bird: objects.Bird;
        bullets = [];
        bulletCount: number = 0;
        firing: boolean = false;
        constructor(bird: objects.Bird, game: createjs.Container) {
            this.game = game;
            this.bird = bird;
        }

        fire() {
            // create two bullets on either side of  plane
            var bullet: objects.Bullet = new objects.Bullet(this.game);


            this.game.addChild(bullet);
            bullet.x = this.bird.x;
            bullet.x = 80;
            this.bullets.push(bullet);


            // Play Bullet Sound
            createjs.Sound.play("bullet");
        } // end fire

        update() {
            var len:number = this.bullets.length;
            var bullet: objects.Bullet;

            for (var count = len - 1; count >= 0; count--) {
                bullet = this.bullets[count];
                // move current bullet up stage
                bullet.y -= 25;
                // check to see if the bullet has left the stage
                if (bullet.y < 0) {
                    this.destroyBullet(bullet);
                } 
            } 

            // fire bullet if mouse button is clicked or game container is tapped
            if ((this.firing == true) && (this.bulletCount % 10 == 0)) {
                
                    this.fire();
                
            }
            //increment bullet count to limit number of bullets being fired
            this.bulletCount++;
        } // end update

        destroyBullet(bullet: objects.Bullet) {
            var len: number = this.bullets.length;

            // remove bullet from game and from bullet array
            for (var count = 0; count < len; count++) {
                if (this.bullets[count] == bullet) {
                    this.bullets.splice(count, 1);
                    this.game.removeChild(bullet);
                }
            }
        } // end destroyBullet
    }
} 