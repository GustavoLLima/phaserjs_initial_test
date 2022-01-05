<?php
	ini_set("display_errors", true);
	$con = mysqli_connect("localhost", "letielcom", "laguinho10", "letielco_saga");
	if(!$con)
		echo "Não foi possível conectar no banco de dados!";