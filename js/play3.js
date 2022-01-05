var playState3 = {
    create: function() {

        //game.world.resize(3000, 600);

        game.time.reset();

        game.world.setBounds(0, 0, 3000, 600);

        //  A simple background for our game
        game.add.sprite(0, 0, 'sky');

        game.add.sprite(2780,482, 'flag');

        // Finally some stars to collect
        pokebolas = game.add.group();

        //  We will enable physics for any star that is created in this group
        pokebolas.enableBody = true;

        // //  Here we'll create 12 of them evenly spaced apart
        // for (var i = 0; i < 28; i++)
        // {
        //     //  Create a star inside of the 'stars' group
        //     var pokebola = pokebolas.create(i * 100, 0, 'pokebola');

        //     //  Let gravity do its thing
        //     pokebola.body.gravity.y = (Math.random() * 0) + 100;

        //     //  This just gives each star a slightly random bounce value
        //     //pokebola.body.bounce.y = 0.7 + Math.random() * 0.2;
        // }

        //  The platforms group contains the ground and the 2 ledges we can jump on
        platforms = game.add.group();

        //  We will enable physics for any object that is created in this group
        platforms.enableBody = true;

        // Here we create the ground.
        var ground = platforms.create(0, game.world.height - 64, 'ground');

        //  Scale it to fit the width of the game (the original sprite is 400x32 in size)
        ground.scale.setTo(2, 2);

        //  This stops it from falling away when you jump on it
        ground.body.immovable = true;

        /*//  Now let's create two ledges
        var ledge = platforms.create(400, 400, 'ground');
        ledge.body.immovable = true;

        ledge = platforms.create(-150, 250, 'ground');
        ledge.body.immovable = true;*/

        // The player3 and its settings
        player3 = game.add.sprite(2432, game.world.height - 150, 'charizard');

        //  We need to enable physics on the player3
        game.physics.arcade.enable(player3);

        //  Player3 physics properties. Give the little guy a slight bounce.
        player3.body.bounce.y = 0.1;
        player3.body.gravity.y = 200;
        player3.body.collideWorldBounds = true;

        macaco = game.add.physicsGroup(
            Phaser.Physics.ARCADE,
            game.world,
            'macaco'  
        );

        macaco.enableBody = true;

        macaco.collideWorldBounds = true;

        goku = macaco.create(-200, game.world.height - 110, 'macaco');

        goku.animations.add('walk-right', [6,5,4,3,2,1,0]);
        goku.animations.add('walk-left', [7,8,9,10,11,12,13]);
        goku.play('walk-right', 7, true);
        goku.body.velocity.setTo(+60,0);   

        goku.body.immovable = true;

        music = game.add.audio('macaco');

        // music.play();

        //---------------------------------------



        //  Our two animations, walking left and right.

        // ANIMAÇÃO DO CHARMANDER
        // player3.animations.add('right', [5,4,3,2,1,0], 10, true);
        // player3.animations.add('left', [6, 7, 8, 9,10], 10, true);

        player3.animations.add('right', [0,1,2,3,4], 10, true);
        player3.animations.add('left', [5,6,7,8,9], 10, true);

        //  Our controls.
        cursors = game.input.keyboard.createCursorKeys();
        
    },

    update: function() {

        game.physics.arcade.collide(player3, professores, this.player3HitSprite, null, this);

        game.physics.arcade.collide(player3, macaco, this.player3HitMacaco, null, this);

        game.physics.arcade.collide(pokebolas, platforms, this.starsHitPlatform, null, this);

        game.physics.arcade.overlap(player3, pokebolas, this.collectStar, null, this);

        this.camera.follow(player3, Phaser.Camera.FOLLOW_PLATFORMER);

        //  Collide the player3 and the stars with the platforms
        game.physics.arcade.collide(player3, platforms);

        //  Reset the player3s velocity (movement)
        player3.body.velocity.x = 0;

        if (cursors.left.isDown)
        {
            //  Move to the left
            player3.body.velocity.x = -200;

            player3.animations.play('left');
        }
        else if (cursors.right.isDown)
        {
            game.camera.x += 4;

            //  Move to the right
            player3.body.velocity.x = 200;

            player3.animations.play('right');
        }
        else
        {
            //  Stand still
            player3.animations.stop();

            player3.frame = 4;
        }
        
        //  Allow the player3 to jump if they are touching the ground.
        if (cursors.up.isDown && player3.body.touching.down)
        {
            player3.body.velocity.y = -350;
        }

        // if(player3.body.x >= 2800)
        // {
        //     game.state.start('win');
        // }

        /*if(marcia.body.touching.up && !morto){
            console.log("Matou!");
            morto = true;
        }

        if(marcia.body.touching.left || marcia.body.touching.right){
            morte();
        }*/

        //console.log(goku.body.x);
        if(player3.body.x < goku.body.x) {
             goku.body.velocity.setTo(-60,0);
             goku.play('walk-left', 7, true);
        } else if(player3.body.x > goku.body.x) {
             goku.body.velocity.setTo(+60,0);
             goku.play('walk-right', 7, true);
        }
    },

    player3HitSprite: function(player3,x){
        if(x.body.touching.up){
            // score+=100;
            // scoreText.text = 'Score: ' + score;
            x.kill();
        }

        if(x.body.touching.left || x.body.touching.right){
            player3.body.x = 32;
            // this.morte();
        }
    },

    player3HitMacaco: function(player3,x){
        if(x.body.touching.left || x.body.touching.right || x.body.touching.up){
            player3.body.x = 32;
        }
    },

    starsHitPlatform: function(stars,platforms){
        if(stars.body.touching.down){
            stars.body.y = 0;
        }
    },

    collectStar: function(player3, star) {
        player3.body.x = 32;
    },

    render: function() {

        //game.debug.cameraInfo(game.camera, 32, 32);
        game.debug.text('Tempo: ' + this.game.time.totalElapsedSeconds(), 32, 32);

    },

    win: function() {
        game.state.start('win');
    }
}