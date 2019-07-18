function mostrar()
{

	var numero;
	var acumulador = 0;
	var acumuladorNeg = 0;
	var contador = 0;
	var contadorNeg = 0;
	var contadorCero = 0;
	var contadorPar = 0;
	var promedio;
	var promedioNeg;
	var respuesta = "si";

	do{

		numero = parseInt(prompt("Ingrese un numero: "));

		while(isNaN(numero)){

			numero = parseInt(prompt("Error, ingrese un numero por favor."));
	
		}

		if(numero>0){

			acumulador = acumulador + numero;
			
			contador++

		}

		else if(numero==0){

			contadorCero++

		}

		else{

			acumuladorNeg = acumuladorNeg + numero;

			contadorNeg++
		
		}

		if((numero % 2) == 0){

		contadorPar++

		}

		respuesta = prompt("Desea ingresar otro numero?");


	}while(respuesta == "si" || respuesta == "s");

	
	promedio = acumulador/contador;		
	promedioNeg = acumuladorNeg/contadorNeg;

	if(contador == 0){

		promedio = 0;
	}

	if(contadorNeg == 0){

		promedioNeg = 0;
	}

document.write("Suma positivos: " + acumulador + "<br>");
document.write("Cantidad positivos: " + contador + "<br>");
document.write("Promedio positivos: " + promedio + "<br>");
document.write("Cantidad de 0: " + contadorCero + "<br>");
document.write("Suma negativos: " + acumuladorNeg + "<br>");
document.write("Cantidad negativos: " + contadorNeg + "<br>");
document.write("Promedio negativos: " + promedioNeg + "<br>");
document.write("Cantidad pares: " + contadorPar + "<br>");
document.write("Diferencia: " + (acumulador + acumuladorNeg) + "<br>");




}//FIN DE LA FUNCIÓN