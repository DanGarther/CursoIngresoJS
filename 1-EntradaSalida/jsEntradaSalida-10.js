/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;

    var Descuento;

    var nuevoimporte;


    importe = parseFloat(document.getElementById("importe").value);

    Descuento = (importe * 25) / 100;

    nuevoimporte = importe - Descuento;

    document.getElementById("resultado").value = nuevoimporte;
    
}
