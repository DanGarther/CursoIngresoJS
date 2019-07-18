function mostrar()
{

/*
	var numero;
	var acumulador = 0;
	var acumuladorNeg = 0;
	var respuesta = "si";

	while(respuesta == "si"){

		numero = parseInt(prompt("Ingrese un numero por favor."));

		if(numero>0){

		acumulador = acumulador + numero;

		}

		else{

			acumuladorNeg = (acumuladorNeg + 1) * numero;

		}


		respuesta = prompt("Desea ingresar otro numero?").toLowerCase();

	}

	document.getElementById("suma").value = acumulador;
	document.getElementById("producto").value = acumuladorNeg;
*/

var numero;
var acumulador = 0;
var acumuladorNeg = 1;
var flag = 0;
var respuesta;

do{

	numero = parseInt(prompt("Ingrese un numero por favor."));

	while(isNaN(numero)){

		numero = parseInt(prompt("Error, ingrese un numero por favor."));

	}

	if(numero>=0){

	acumulador = acumulador + numero;

	}

	else{

		acumuladorNeg = acumuladorNeg * numero;

		flag = 1;
	}


	respuesta = prompt("Desea ingresar otro numero?").toLowerCase();

}while(respuesta == "si" || respuesta == "s");

if(flag == 0){

	acumuladorNeg = 0;

}

document.getElementById("suma").value = acumulador;
document.getElementById("producto").value = acumuladorNeg;

}//FIN DE LA FUNCIÓN