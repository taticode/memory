let intervaloId; // Variable para almacenar el ID del intervalo
let segundos = 0;
let minutos = 0;
let segundosTexto;
let minutosTexto;


function iniciarCronometro() {

    pausarCronometro(intervaloId);

    // Reiniciar el tiempo a cero
    segundos = 0;
    minutos = 0;
    document.querySelector('#minutos').innerText = '00';
    document.querySelector('#segundos').innerText = '00';


    function actualizaContador() {

        segundos = segundos + 1;

        if (segundos > 59) {
        segundos = 0;
        minutos = minutos + 1;
        }
        segundosTexto = segundos;
        minutosTexto = minutos;
        if (segundos < 10) {
        segundosTexto = '0' + segundos;
        }
        if (minutos < 10) {
        minutosTexto = '0' + minutos;
        }

        document.querySelector('#minutos').innerText = minutosTexto;
        document.querySelector('#segundos').innerText = segundosTexto;
    }

    // Iniciar el cronómetro
    intervaloId = setInterval(actualizaContador, 1000);



}

    // Función para pausar el cronómetro
    function pausarCronometro() {
        clearInterval(intervaloId);
    }
