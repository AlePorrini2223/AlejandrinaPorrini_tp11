console.log("Bienvenido al Sistema de ingreso de Usuario");

// DECLARO FUNCION
function PerfilUsuario() {

    console.log("Indique su perfil de usuario:");
    console.log("Ingrese si ud. es Administrador, Asistente o Invitado:");

    let perfil;

    if(perfil === "") {
        console.log("Debe verificar el perfil de usuario");
    }
    else if(perfil === "administrador" || perfil === "ADMINISTRADOR" || perfil === "Administrador") {
        console.log( "Usted tiene todos los privilegios de uso del sistema") ;
    }
    else if(perfil ==="asistente" || perfil === "ASISTENTE" || perfil === "Asistente") {
        console.log("Usted sólo tiene permisos de registrar, modificar y consultar datos");
    }
    else if(perfil ==="invitado" || perfil === "INVITADO" || perfil === "Invitado") {
        console.log("Usted sólo tiene permisos de consultar datos");
    }
    else {
        console.log("Debe especificar un perfil valido");
    }
}

// LLAMO FUNCION
let respuesta = PerfilUsuario();

