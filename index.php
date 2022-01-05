<!doctype html> 
<html lang="pt-br"> 
<head> 
	<meta charset="UTF-8" />
    <title>Jogo Furg</title>
	<script type="text/javascript" src="js/phaser.min.js"></script>
    <script type="text/javascript" src="js/boot.js"></script>
    <script type="text/javascript" src="js/load.js"></script>
    <script type="text/javascript" src="js/menu.js"></script>
    <script type="text/javascript" src="js/play.js"></script>
    <script type="text/javascript" src="js/play2.js"></script>
    <script type="text/javascript" src="js/play3.js"></script>
    <script type="text/javascript" src="js/win.js"></script>
    <script type="text/javascript" src="js/win2.js"></script>
    <script type="text/javascript" src="js/game.js"></script>
    <style type="text/css">
        body {
            margin: 0;
            padding: 0;
        }

        #turn{

                width:100%;

                height:100%;

                position:fixed;

                top:0px;

                left:0px;

                background-color:white;

                background-image:url('assets/novos/rotate.png');

                background-repeat:no-repeat;

                background-position: center center;

                display:none;

            }
    </style>
    <meta name='description' content='FURG' />

</head>
<body>
    <div id = "turn"></div>
    <div id="gameDiv" style='margin: 0 auto;' class='pull-left'></div>

    <script>
    var player;
    var platforms;
    var cursors;

    var professores;

    var score = 0;
    var scoreText;
    </script>

</body>
</html>