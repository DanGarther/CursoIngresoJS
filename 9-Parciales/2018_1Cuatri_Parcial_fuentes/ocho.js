function mostrar()
{

var letra;
var num;
var resp;
var contPar = 0;
var contImpar = 0;
var acumPos = 0;
var contPos = 0;
var promPos;
var contaCero = 0;
var acumNeg = 0;
var numMax;
var letraMax;
var numMin;
var letraMin;
var flag = 0;

do{

    letra = prompt("Ingrese una letra por favor.").toUpperCase();

    while(!(isNaN(letra))){

        letra = prompt("Eso no es una letra, por favor ingrese una.").toUpperCase()
    }

    num = parseInt(prompt("Ingrese un numero por favor."))

    while(isNaN(num)){

        num = parseInt(prompt("Ese no es un numero, por favor ingrese un numero."));
    }

    while(num < -100 || num > 100){

        num = parseInt(prompt("Por favor ingrese un numero entre -100 y 100"));

    }

    if(num%2 == 0){

        contPar++;

    }

  else {

        contImpar++;

    }

    if (num>0){

        acumPos = num + acumPos;

        contPos++;

    }

    else if(num == 0){

        contaCero++;

    }

    else{

        acumNeg = acumNeg + num;

    }


    promPos = acumPos / contPos;


    if(num < numMin || flag == 0){

        numMin = num;
        letraMin = letra;

    }

    if(num > numMax || flag == 0){

        numMax = num;
        letraMax = letra;

        flag = 1
    }


    resp = prompt("Desea continuar?").toLowerCase();

}while(resp == "s" || resp == "s")

if(acumPos == 0){

    promPos = 0
    
}


document.write("Cantidad de numeros pares: " + contPar + "<br>");
document.write("Cantidad de numeros impares: " + contImpar + "<br>");
document.write("Cantidad de ceros: " + contaCero + "<br>");
document.write("Promedio de numeros positivos: " + promPos + "<br>");
document.write("Suma de todos los negativos: " + acumNeg + "<br>");
document.write("Numero maximo (Con letra): " + numMax + " " + letraMax + "<br>");
document.write("Numero minimo (Con letra): " + numMin + " " + letraMin + "<br>");
}
