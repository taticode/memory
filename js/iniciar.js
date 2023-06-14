

function iniciar(){



    reparteTarjetas(); 

    document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    
        elemento.addEventListener("click", descubrir);
    });
    document.querySelector("#mov").innerText = '0';
    document.querySelector('#feedback').classList.remove('visible');
/* iniciarCronometro() */
}

iniciar();

    
let restart = document.querySelector(".restart");
restart.addEventListener("click", iniciar );