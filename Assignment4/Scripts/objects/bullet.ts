// Bullet Class
module objects {
    export class Bullet extends objects.GameObject {
        game: createjs.Container;
        constructor(game: createjs.Container) {
            super("bullet", game);

            this.game.addChild(this);
        }

        public tick(ds: number) {
            this.x += ds * 1000;
        }



    }
} 