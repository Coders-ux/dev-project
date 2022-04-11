function validateform() {
    var nombre = document.getElementById("name-contact").value;
    var email = document.getElementById("email-contact").value;
    var select = document.getElementById("select-contact").value;
    var textarea = document.getElementById("text-contact").value;

    // Validacion Nombre

    if (nombre != '') {
        document.getElementById("name-contact").classList.add("success");
        document.getElementById("name-contact").classList.remove("error");
    } else {
        document.getElementById("name-contact").classList.add("error");
        document.getElementById("name-contact").classList.remove("success");
        document.getElementById("name").innerHTML = "favor Ingresar Nombre";
    }

    // Validacion Correo Electronico 

    if (email != '') {

        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            document.getElementById("email-contact").classList.add("success");
            document.getElementById("email-contact").classList.remove("error");
        } else {
            document.getElementById("email-contact").classList.add("error");
            document.getElementById("email-contact").classList.remove("success");
            document.getElementById("error-email").innerHTML = "Favor Ingresar Correo Correctamente";
        }

    } else {
        document.getElementById("email-contact").classList.add("error");
        document.getElementById("email-contact").classList.remove("success");
        document.getElementById("error-email").innerHTML = "Favor Ingresar Correo Correctamente";

    }

    // Validacion Opciones

    if (select != "seleccione") {
        document.getElementById("select-contact").classList.add("success");
        document.getElementById("select-contact").classList.remove("error");
    } else {
        document.getElementById("select-contact").classList.add("error");
        document.getElementById("select-contact").classList.remove("success");
        document.getElementById("Selector").innerHTML = "Favor Seleccionar una Opcion";

    }

    // Validacion Text Area

    if (textarea != '') {
        document.getElementById("text-contact").classList.add("success");
        document.getElementById("text-contact").classList.remove("error");
    } else {
        document.getElementById("text-contact").classList.add("error");
        document.getElementById("text-contact").classList.remove("success");
        document.getElementById("area").innerHTML = "Favor Escribir Detalle";

    }



    // Impresion en Consola
    console.log(nombre);
    console.log(email);
    console.log(select);
    console.log(textarea);

}