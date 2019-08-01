function mostrar()
{

var nota;
var sexo;
var sexoNotaBaja;
var notaBaja;
var acum = 0;
var flag = 0;
var contVar = 0;


for(var cantidad = 0; cantidad < 5; cantidad++){

    nota = parseInt(prompt("Ingrese la nota del alumno."));

    while(isNaN(nota)){

        nota = parseInt(prompt("Eso no es numero, ingrese la nota del alumno."));
    
    }

    while(!(nota >= 0 && nota <=10)){

        nota = parseInt(prompt("Debe ser una nota entre 1 y 10, ingrese la nota del alumno."));

    }

    sexo = prompt("Ingrese el sexo del alumno.").toLowerCase();

    while(!(sexo == "f" || sexo == "m")){

        sexo = prompt("Ingrese si es masculino (m) o femenino (f) del alumno.").toLowerCase();

    }


    acum = acum + nota;

    if( nota < notaBaja || flag == 0){

        notaBaja = nota;
        sexoNotaBaja = sexo;

        flag = 1
    }

    if(sexo == "m" && nota >= 6){
        contVar++
    }
}

document.write("Promedio: " + (acum/cantidad) + "<br>");
document.write("Persona con la nota mas baja: " + notaBaja + " " + sexoNotaBaja.toUpperCase() + "<br>");
document.write("Cantidad de varones aprobados: " + contVar);

}
