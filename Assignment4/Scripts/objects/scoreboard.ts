module objects {
    // Scoreboard Class
    export class Scoreboard {
        label: createjs.Text;
        labelString: string = "";
        game: createjs.Container;
        lives: number = constants.PLAYER_LIVES;
        level: number = currentState;
        score: number;
        highScore: number;
        scoreValueLabelString: string = "";
        width: number;
        height: number;
        constructor(game: createjs.Container) {
            this.label = new createjs.Text(this.labelString, constants.GAME_FONT, constants.FONT_COLOUR);
            this.update();
            this.width = this.label.getBounds().width;
            this.height = this.label.getBounds().height;
            this.game = game;
            this.score = 0;


            stage.addChild(this.label);
        }

        update() {
            this.labelString = "Lives: " + this.lives.toString() + " Score: " + this.scoreValueLabelString + " Level: " + this.level.toString();
            this.label.text = this.labelString;
            this.scoreValueLabelString = this.score.toString();
        }
    }
}