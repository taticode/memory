

function iniciarCronometro(){
    let segundos = 0;
    let minutos = 0;
    let segundosTexto;
    let minutosTexto;


    function actualizaContador(){
        segundos = segundos + 1;
        
        if(segundos > 59 ){
            segundos = 00;
            minutos = minutos + 1;
        }
        segundosTexto = segundos;
        minutosTexto = minutos;
        if (segundos < 10) {
            segundosTexto = '0' + segundos;
        }
        if(minutos < 10){
            minutosTexto = '0' + minutos;
        }

        document.querySelector('#minutos').innerText = minutosTexto;
        document.querySelector('#segundos').innerText = segundosTexto;

    }

    setInterval(actualizaContador, 1000);
}