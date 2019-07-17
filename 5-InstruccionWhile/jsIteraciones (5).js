function mostrar()
{


	var sexo;

	sexo = prompt("Ingrese su sexo: ").toLowerCase();

	while(!(sexo == "m" || sexo == "f")){
	
	   sexo = prompt("No valido. Reintente");
	
	}

document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN