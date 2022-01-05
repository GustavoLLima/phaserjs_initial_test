var winState = {
	create: function() {

		var pontuacao = this.game.time.totalElapsedSeconds();

		var winLabel = game.add.text(80,80,'Segunda fase!',
						{ font: '50px Arial', fill: '#ffffff'});

		var startLabel = game.add.text(80,game.world.height-80,
						'Pressione W para iniciar',
						{ font: '25px Arial', fill: '#ffffff'});

		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

		wkey.onDown.addOnce(this.restart, this);
	},

	restart: function() {
		game.state.start('play2');
	},
}