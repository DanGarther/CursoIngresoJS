function mostrar()
{


	var numero;
	var acumulador = 0;
	var acumuladorNeg = 1;
	var respuesta;

	respuesta = prompt("Desea ingresar un numero?").toLowerCase();
	numero = parseInt(prompt("Ingrese un numero"));

	while(respuesta == "si" && numero >= 0 ){

		acumulador = acumulador + numero;

		respuesta = prompt("Desea ingresar otro numero?").toLowerCase();
		numero = parseInt(prompt("Ingrese un numero"));
	
		console.log(acumulador);
	}

	

	while(respuesta == "si" && numero <= 0){

		acumuladorNeg = acumuladorNeg * numero;

		respuesta = prompt("Desea ingresar otro numero?").toLowerCase();
		numero = parseInt(prompt("Ingrese un numero"));
	
		console.log(acumuladorNeg);
	}

	

}//FIN DE LA FUNCIÓN