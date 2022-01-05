<?php
	ini_set("display_errors", true);
	include 'banco.php';
	$query = mysqli_query($con, "SELECT nick, pontuacao FROM pontuacoes ORDER BY pontuacao ASC LIMIT 14");
	echo "<tr><th>Nome</th><th>Tempo (em segundos)</th></tr>";
	while ($p = mysqli_fetch_array($query)){
		echo "<tr><td>$p[nick]</td><td>".number_format($p['pontuacao'], 2)."</td></tr>";
	}