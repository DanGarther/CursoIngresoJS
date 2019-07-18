function mostrar()
{

	var numero;
	var minimo;
	var maximo;
	var flag = 0;
	
	do
	{
		numero = parseInt(prompt("Ingrese un numero por favor"));

		while(isNaN(numero)){

			numero = parseInt(prompt("Ingrese un numero por favor"));
		
		
		}

		if((numero > maximo) || flag == 0){

			maximo = numero;
		}

		if((numero < minimo) || flag == 0) {

			minimo = numero;

			flag = 1
		}

		respuesta = prompt("Desea ingresar otro numero?").toLowerCase()

	} while (respuesta == "si" || respuesta == 's');



	document.getElementById("maximo").value = maximo;

	document.getElementById("minimo").value = minimo;



}//FIN DE LA FUNCIÓN