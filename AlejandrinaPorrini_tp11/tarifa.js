console.log("Bienvenido al Sistema de ajuste tarifario de energía eléctrica");

// DECLARO VARIABLES
let pagoMes = 5000;
let consumoKWH = 500;
let resultado = "";

/*
if (consumoKWH > 300) {
    resultado = pagoMes + ((pagoMes* 20) / 100);
}
else {
    resultado = 5000;
}
*/

// TERNARIO
resultado = consumoKWH > 300 ? pagoMes + ((pagoMes* 20) / 100) : 5000;

console.log(`Debido a que su hogar tuvo un consumo de ${consumoKWH}wh, 
    en base al ajuste tarifario (hogares con consumo mayor a 300kwh por mes
    tendrán un aumento del 20%), cumplimos con informarle que se ha ajustado
    el total a pagar, que será de ${resultado}`);




