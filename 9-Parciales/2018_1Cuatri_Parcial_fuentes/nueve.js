function mostrar()
{

    var marca;
    var peso;
    var acumPeso = 0;
    var contPeso = 0;
    var promPeso;
    var temp;
    var resp;
    var contTempPar = 0;
    var contTempBaja = 0;
    var pesoMax;
    var pesoMin;
    var marcaPesoMax;
    var flag = 0;


    do{

        marca = prompt("Ingrese marca por favor.").toUpperCase();
        
        peso = parseFloat(prompt("Ingrese el peso por favor."));

        while (isNaN(peso)){

            peso = parseFloat(prompt("Por favor ingrese un peso valido."));

        }

        while(peso < 1 || peso > 100){

            peso = parseFloat(prompt("Por favor ingrese un peso valido."));

        }

        temp = parseInt(prompt("Ingrese la temperatura por favor."));

        while (isNaN(temp)){

            temp = parseFloat(prompt("Por favor ingrese una temperatura valida."));

        }

        while(temp < -30 || temp > 30){

            temp = parseFloat(prompt("Por favor ingrese una temperatura valida."));

        }

        acumPeso = acumPeso + peso;
        contPeso++


        if(temp%2 == 0){

            contTempPar++;

        }

        if(pesoMax<peso || flag == 0){

            pesoMax = peso;
            marcaPesoMax = marca;
        }

        if(pesoMin > peso || flag == 0){

            pesoMin = peso;

            flag = 1;
        }

        if(temp < 0){

            contTempBaja++;

        }


        resp = prompt("Desea seguir ingresando datos?").toLowerCase();


    }while(resp == "s" || resp == "si");

    
    promPeso = acumPeso/contPeso;

    if(contPeso == 0){

        promPeso = 0;

    }




document.write("Cantidad de temperaturas pares: " + contTempPar + "<br>");
document.write("Marca del producto mas pesado: " + marcaPesoMax + "<br>");
document.write("Cantidad de cantidad de productor a menos de 0 grados: " + contTempBaja + "<br>");
document.write("Peso promedio: " + promPeso + "<br>");
document.write("Peso maximo: " + pesoMax + "<br>");
document.write("peso minimo: " + pesoMin + "<br>");

}
