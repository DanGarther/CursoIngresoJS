function mostrar()
{

	var numero;

	numero = prompt("Ingrese un numero: ");

	while(numero < 0 || numero >= 10){
	
	   numero = prompt("No valido. Reintente");
	
	}

	document.getElementById("Numero").value = numero;


}//FIN DE LA FUNCIÓN