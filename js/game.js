var gameWidth = 1000;
var gameHeight = 480;


/*var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'gameDiv');*/
var game = new Phaser.Game(gameWidth, gameHeight, Phaser.AUTO, 'gameDiv');

var orientated = false;

game.state.add('boot',bootState);
game.state.add('load',loadState);
game.state.add('menu',menuState);
game.state.add('play',playState);
game.state.add('play2',playState2);
game.state.add('play3',playState3);
game.state.add('win',winState);
game.state.add('win2',winState2);

game.state.start('boot');