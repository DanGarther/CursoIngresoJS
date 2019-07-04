/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var num1;

    var num2;

    var operacion;

    num1 = parseInt(document.getElementById("numeroUno").value);

    num2 = parseInt(document.getElementById("numeroDos").value);

    operacion = num1 + num2;

    alert("El resultado de la suma es " + operacion);

}



function restar()
{
    var num1;
    
    var num2;

    var operacion;


    num1 = parseInt(document.getElementById("numeroUno").value);
    
    num2 = parseInt(document.getElementById("numeroDos").value);

    operacion = num1 - num2;

    alert("El resultado de la resta es " + operacion);

}



function multiplicar()
{ 
    var num1;
    
    var num2;

    var operacion;


    num1 = parseInt(document.getElementById("numeroUno").value);
    
    num2 = parseInt(document.getElementById("numeroDos").value);

    operacion = num1 * num2;

    alert("El resultado de la multiplicacion es " + operacion);

}



function dividir()
{
    var num1;
    
    var num2;

    var operacion;


    num1 = parseInt(document.getElementById("numeroUno").value);
    
    num2 = parseInt(document.getElementById("numeroDos").value);

    operacion = num1 / num2;

    alert("El resultado de la division es " + operacion);

}