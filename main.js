let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let boton2 = document.getElementById("limpiar");
let contrasena = document.getElementById("contrasena");

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789¡#$%&*()_-+={}|:;<>,.?/";

function generar(){

    let numeroDigitado = parseInt (cantidad.value);

    if( numeroDigitado < 8){
        alert("La cantidad de caracteres tiene que ser mayor que" + numeroDigitado);
    }

    let password = "";
    for(let i= 0; i < numeroDigitado; i++ ){

        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio);

        password+= caracterAleatorio;

    }

    contrasena.value = password


}











