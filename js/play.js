var teste_pia = false;
var teste_vaso = false;
var teste_box = false;
var teste_porta = false;

var playState = {
    create: function() {

        game.time.reset();

        game.world.setBounds(0, 0, 2000, 600);

        //  A simple background for our game
        background = game.add.tileSprite(0,0,game.width,game.height,'background');
        background.scale.x=2;
        background.scale.y=2;

        //  The platforms group contains the ground and the 2 ledges we can jump on
        platforms = game.add.group();

        //  We will enable physics for any object that is created in this group
        platforms.enableBody = true;

        game.add.sprite(-10,game.height-10,'ground');

        var ground2 = platforms.create(-10, game.world.height - 50, 'ground');
        ground2.scale.y=0.4;
        ground2.body.immovable = true;

        pia = game.add.sprite(450, game.world.height - 400, 'pia');

        pia.scale.x=0.17;
        pia.scale.y=0.17;

        vaso = game.add.sprite(900, game.world.height - 400, 'vaso');

        vaso.scale.x=0.17;
        vaso.scale.y=0.17;

        box = game.add.sprite(1350, game.world.height - 400, 'box');

        box.scale.x=0.17;
        box.scale.y=0.17;

        porta = game.add.sprite(1800, game.world.height - 400, 'porta');

        porta.scale.x=0.17;
        porta.scale.y=0.17;

        // The player and its settings
        player = game.add.sprite(0, game.world.height - 250, 'lontra');

        player.scale.x=0.7;
        player.scale.y=0.7;

        //  We need to enable physics on the player
        game.physics.arcade.enable(player);

        //  Player physics properties. Give the little guy a slight bounce.
        player.body.bounce.y = 0.1;
        player.body.gravity.y = 500;
        player.body.collideWorldBounds = true;

        //  Our two animations, walking left and right.
        player.animations.add('right', [0,1,2,3,4,5], 10, true);
        player.animations.add('left', [6,7,8,9,10,11], 10, true);

        player.frame = 5;




        container_text = game.add.sprite(250,150,'container');
        container_text.scale.setTo(10,5);
        container_text.alpha = 0.8;
        container_text.fixedToCamera = true;
        container_text.visible = false;

        text2 = game.add.text(250,150,'',
        {font: '35px Arial',fill: '#000',wordWrap: true, wordWrapWidth: container_text.width, align: "center"});
        text2.fixedToCamera = true;
        text2.visible = false;

        enemyFace = game.add.sprite(250,150,'rosto_lontra');
        enemyFace.scale.setTo(0.5,0.5);
        enemyFace.fixedToCamera = true;
        enemyFace.visible = false;





        /*text = game.add.text(game.camera.width/2, game.camera.height/2, "", { font: "40px Arial Bold", fill: "#000000", align: "center" });
        text.fixedToCamera = true;
        text.anchor.setTo(0.5, 0.5);*/

        game.input.onDown.add(this.removeText, this);

        //  Our controls.
        cursors = game.input.keyboard.createCursorKeys();
        
    },

    removeText: function(){
        text2.text='';
        container_text.visible=false;
        text2.visible=false;
        enemyFace.visible=false;
    },



    update: function() {

        if(!teste_pia)
        {
            if (this.checkOverlap(player, pia))
            {
                /*text.text='Economize água\n enquanto escova os dentes\n desligando a torneira';*/
                teste_pia = true;
                player.body.velocity.setTo(0,0);

                text2.text='\n\nEconomize água enquanto escova os dentes desligando a torneira';
                container_text.visible=true;
                text2.visible=true;
                enemyFace.visible=true;
            }
        }

        if(!teste_vaso)
        {
            if (this.checkOverlap(player, vaso))
            {
                /*text.text='Não use a descarga sem necessidade';*/
                teste_vaso = true;
                player.body.velocity.setTo(0,0);

                text2.text='\n\nNão use a descarga sem necessidade';
                container_text.visible=true;
                text2.visible=true;
                enemyFace.visible=true;
            }
        }

        if(!teste_box)
        {
            if (this.checkOverlap(player, box))
            {
                teste_box = true;
                player.body.velocity.setTo(0,0);

                text2.text='\n\n\tTome banhos rápidos';
                text2.align='center';
                container_text.visible=true;
                text2.visible=true;
                enemyFace.visible=true;
            }
        }

        if(!teste_porta)
        {
            if (this.checkOverlap(player, porta))
            {
                teste_porta = true;
                player.body.velocity.setTo(0,0);

                text2.text='\n\n\tFase concluída';
                text2.align='center';
                container_text.visible=true;
                text2.visible=true;
                enemyFace.visible=true;
            }
        }

        this.camera.follow(player, Phaser.Camera.FOLLOW_PLATFORMER);


        //  Collide the player and the stars with the platforms
        game.physics.arcade.collide(player, platforms);

        //  Reset the players velocity (movement)
        player.body.velocity.x = 0;

        if(game.input.activePointer.isDown){

            if (game.input.activePointer.x < player.x - game.camera.x)
            {
                // mouse pointer is to the left
                /*console.log("<");*/
                 //  Move to the left
                player.body.velocity.x = -150;

                /*if(player.frame <= 11 && player.frame > 6)
                    player.frame--;
                else
                    player.frame = 11;*/

                player.animations.play('left');
            }
            else if (game.input.activePointer.x > player.x - game.camera.x)
            {
            // mouse pointer is to the right
                /*console.log(">");*/
                game.camera.x += 4;

                //  Move to the right
                player.body.velocity.x = 150;


                player.animations.play('right');
            }
        }
        else
        {  
            if (cursors.left.isDown)
            {
                //  Move to the left
                player.body.velocity.x = -150;

                player.animations.play('left');
            }
            else if (cursors.right.isDown)
            {
                game.camera.x += 4;

                //  Move to the right
                player.body.velocity.x = 150;

                /*player.animations.play('right');*/

                player.animations.play('right');
            }
            else
            {
                //  Stand still
                player.animations.stop();

                /*player.frame = 11;*/
            }
        }
        
        //  Allow the player to jump if they are touching the ground.
        if (cursors.up.isDown && player.body.touching.down)
        {
            player.body.velocity.y = -350;
        }

    },

    checkOverlap: function(spriteA, spriteB){        
        var boundsA = spriteA.getBounds();
        var boundsB = spriteB.getBounds();

        return Phaser.Rectangle.intersects(boundsA, boundsB);
    },

    render: function() {

        //game.debug.cameraInfo(game.camera, 32, 32);
        //game.debug.text('Tempo: ' + this.game.time.totalElapsedSeconds(), 32, 32);
         game.debug.text(game.time.fps, 32, 32);

    },

    win: function() {
        game.state.start('win');
    }
}