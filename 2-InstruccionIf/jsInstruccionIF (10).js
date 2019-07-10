function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota = Math.floor((Math.random() * 10) + 1);

	if(nota == 9 || nota == 10){
		alert("EXCELENTE (" + nota + ")");
	}

	else if(nota > 4){
		alert("APROBÓ (" + nota + ")");
	}

	else{
		alert("Vamos, la proxima se puede (" + nota + ")")
	}

}//FIN DE LA FUNCIÓN