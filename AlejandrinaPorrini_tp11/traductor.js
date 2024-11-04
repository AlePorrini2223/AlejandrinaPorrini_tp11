console.log("Bienvenido al traductor del sistema");

// DECLARO VARIABLES
//const traductor = "perro";
//const traductor = "gato";
//const traductor = "puerta";
//const traductor = "ventana";
const traductor = "mesa";

switch (traductor){
    case "perro": 
        console.log("dog");
        break;

    case "gato":
        console.log("cat");
        break;

    case "puerta":
        console.log("door");
        break;

    case "ventana":
        console.log("window");
        break;

    case "mesa":
        console.log("table");
        break;
    
    default:
        console.log("La palabra ingresada es incorrecta");
        break;
}