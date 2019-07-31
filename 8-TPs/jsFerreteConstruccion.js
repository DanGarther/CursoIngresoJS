/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{

    var largo;
    var ancho;

    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);

    alert(((largo + ancho)*2) * 3 + " metros de alambre.");


}
function Circulo () 
{
    var radio;
    var circ;

    radio = parseFloat(document.getElementById("Radio").value);

    circ = 2*Math.PI*radio;

    alert(((circ) * 3).toFixed(2) + " metros de alambre.");

	
}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var cemento;
    var cal;


    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);

    area = largo * ancho;

    cemento = area * 2;

    cal = area * 3;



    alert("Se necesitan " + cemento + " bolsas de cemento y " + cal + " bolsas de cal.");
    

}