<?php
	include 'banco.php';
	ini_set("display_errors", true);
	if(isset($_POST['pontuacao'])){
		$pontuacao = $_POST['pontuacao'];
		$nick = $_POST['nick'];
		if(mysqli_query($con, "INSERT INTO pontuacoes (nick, pontuacao) VALUES ('$nick', '$pontuacao')")){
			echo "Inserido com sucesso!";
		} else {
			echo "Erro ao inserir dados!";
		}
	}else{
		echo "O que você está fazendo aqui?";
	}