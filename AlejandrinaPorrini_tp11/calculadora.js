console.log("Bienvenido al programa Mi Primera Calculadora");

// DECLARO VARIABLES
let operador = "+";
//let operador = "-";
//let operador = "*";
//let operador = "/";

let num1 = 40;
let num2 = 20;

switch (operador) {
    case "+":
        console.log(`El resultado de sumar ${num1} + ${num2} es: `, num1 + num2);
        break;

    case "-":
        console.log(`El resultado de restar ${num1} - ${num2} es: `, num1 - num2);
        break;

    case "*":
        console.log(`El resultado de multiplicar ${num1} * ${num2} es: `, num1 * num2);
        break;

    case "/":
        console.log(`El resultado de dividir ${num1} / ${num2} es: `, num1 / num2);
        break;        

    default: "Las operaciones aceptadas son: sumar - restar- multiplicar- dividir";
}
