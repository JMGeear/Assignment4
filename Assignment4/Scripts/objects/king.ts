module objects {
    // Pig Class
    export class King extends objects.GameObject {
        dy: number;
        dx: number;
        turnRate: number;
        constructor(game: createjs.Container) {
            super("king", game);
            this.turnRate = 2;

            this.game.addChild(this);
            this.reset();
        }

        reset() {
            this.x = stage.canvas.width + this.width;
            this.y = Math.floor(Math.random() * stage.canvas.height);
            this.dx = Math.floor(Math.random() * 5 + 5);
            this.dy = Math.floor(Math.random() * 2 - 1);
            this.turnRate *= -1;

        }

        update() {
            this.x -= this.dx;
            this.y -= this.dy;
            this.rotation += this.turnRate;

            if (this.x < -(this.width)) {
                this.reset();


            }

        }
    }
}