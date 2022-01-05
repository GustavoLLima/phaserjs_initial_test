var menuState = {
	create: function() {

		this.start();
		
		var nameLabel = game.add.text(80,80,'TSI - A saga',
						{ font: '50px Arial', fill: '#ffffff'});

		var startLabel = game.add.text(80,game.world.height-80,
						'Pressione W e boa sorte!',
						{ font: '25px Arial', fill: '#ffffff'});

		var wkey = game.input.keyboard.addKey(Phaser.Keyboard.W);

		wkey.onDown.addOnce(this.start, this);

		var vkey = game.input.keyboard.addKey(Phaser.Keyboard.V);
		var akey = game.input.keyboard.addKey(Phaser.Keyboard.A);
		var ckey = game.input.keyboard.addKey(Phaser.Keyboard.C);

		if(game.input.keyboard.isDown(Phaser.Keyboard.UP))
			console.log("up");
		
		//game.sound.play('cow');
	},

	start: function () {
		game.state.start('play');
	},

	vPress: function(){

	}
}