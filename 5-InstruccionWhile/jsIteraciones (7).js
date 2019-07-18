function mostrar()
{

	/*var numero;
	var acumulador = 0;
	var contador = 0;
	var respuesta = "si";

	while(respuesta == "si"){

		numero = parseInt(prompt("Ingrese un numero"));

		acumulador = acumulador + numero;

		contador++

		respuesta = prompt("Desea ingresar otro numero?").toLowerCase();
	
	}

	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = acumulador/contador;
*/

var numero;
var acumulador = 0;
var contador = 0;
var respuesta;

do 
{
	numero = parseInt(prompt("Ingrese un numero"));
	respuesta = prompt("Desea ingresar otro numero?").toLowerCase();


	acumulador = acumulador + numero;

		contador++

}while(respuesta == "si" || respuesta == "s");

document.getElementById("suma").value = acumulador;
document.getElementById("promedio").value = acumulador/contador;


}//FIN DE LA FUNCIÓN