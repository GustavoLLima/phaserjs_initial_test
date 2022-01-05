var loadState = {
	preload: function() {
		game.time.advancedTiming = true;

	    game.load.image('background', 'assets/novos/lajota.png');
	    game.load.image('ground', 'assets/novos/chao.png');

	    game.load.image('container', 'assets/novos/container.png');
	    game.load.image('rosto_lontra', 'assets/novos/rosto_lontra.png');

	    game.load.image('pia', 'assets/novos/pia.png');
	    game.load.image('vaso', 'assets/novos/vaso.png');
	    game.load.image('box', 'assets/novos/box.png');
	    game.load.image('porta', 'assets/novos/porta.png');

	    game.load.spritesheet('lontra', 'assets/novos/lontra.png', 400, 171.36);
	},

	create: function() {
		this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
		this.scale.startFullScreen();
		this.scale.setShowAll();
		this.scale.refresh();
		game.state.start('menu');
	},

	init: function() {
		this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;

       	if (!this.game.device.desktop)
        {
           this.scale.forceOrientation(true, false);
           this.scale.enterIncorrectOrientation.add(this.handleIncorrect, this);
           this.scale.leaveIncorrectOrientation.add(this.handleCorrect, this);
        }
	},

	handleIncorrect: function () {

        if(!game.device.desktop){

     		document.getElementById("turn").style.display="block";

     	}

    },

    handleCorrect: function () {

        if(!game.device.desktop)
        {
        	document.getElementById("turn").style.display="none";
        }

    }
}