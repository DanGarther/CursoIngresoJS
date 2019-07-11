function mostrar()
{
var num;
var suma=0;
var contador=0;
var promedio;

while(contador<5){

	num = parseInt(prompt("Ingrese un numero: "));

	suma = suma + num;

	contador++
}

promedio = suma / contador;

document.getElementById("suma").value = suma;
document.getElementById("promedio").value = promedio;


}//FIN DE LA FUNCIÓN