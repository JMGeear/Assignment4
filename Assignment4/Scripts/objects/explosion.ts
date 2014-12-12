﻿// Explosion Class
module objects {
    export class Explosion extends objects.GameObject {
        game: createjs.Container;
        constructor(game: createjs.Container) {
            super("explosion", game);

            this.game.addChild(this);
        }

        remove() {
            this.game.removeChild(this);
        }
    }
}  