﻿/// <reference path="../objects/gameobject.ts" />
/// <reference path="../objects/pig.ts" />
/// <reference path="../objects/egg.ts" />
/// <reference path="../objects/skytwo.ts" />
/// <reference path="../objects/bird.ts" />
/// <reference path="../objects/king.ts" />
/// <reference path="../objects/bullet.ts" />
/// <reference path="../objects/explosion.ts" />
/// <reference path="../objects/scoreboard.ts" />


module states {

    export function gameOverState() {
        skyTwo.update();
    }

    export function gameOver() {
        var gameOverText: createjs.Text;
        var ScoreText: createjs.Text;

        game = new createjs.Container();

        skyTwo = new objects.SkyTwo(game);

        ScoreText = new createjs.Text(scoreboard.score.toString(), constants.GAME_FONT, constants.FONT_COLOUR);
        ScoreText.regX = ScoreText.getBounds().width * 0.5;
        ScoreText.regY = ScoreText.getBounds().height * 0.5;
        ScoreText.x = stage.canvas.width * 0.5;
        ScoreText.y = 180;
        game.addChild(ScoreText);



        gameOverText = new createjs.Text("Game Over", constants.GAME_FONT, constants.FONT_COLOUR);
        gameOverText.regX = gameOverText.getBounds().width * 0.5;
        gameOverText.regY = gameOverText.getBounds().height * 0.5;
        gameOverText.x = stage.canvas.width * 0.5;
        gameOverText.y = stage.canvas.height * 0.5;
        game.addChild(gameOverText);


        stage.addChild(game);

        var playAgainButton = new objects.Button(400, 100, 'playagain');
        game.addChild(playAgainButton);
        playAgainButton.addEventListener("click", function (e) {

            stage.removeChild(game);
            game.removeAllChildren();
            game.removeAllEventListeners();
            currentState = constants.PLAY_STATE;
            changeState(currentState);
            createjs.Sound.play('bang');
        });

    }

    // Read High Score from File
    export function readHighScore() {
        var xhr: XMLHttpRequest = new XMLHttpRequest();

        xhr.open("post", "Scripts/scores.txt", false);
        xhr.send(null);
        scoreboard.highScore = parseInt(xhr.responseText);
    }

    // Write High Score to File via PHP
    export function writeHighScore() {
        var hiScore = new FormData();

        hiScore.append("data", scoreboard.score.toString());
        scoreboard.highScore = scoreboard.score;
        var xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("post", "Scripts/writeScore.php", true);
        xhr.send(hiScore);
    }

}