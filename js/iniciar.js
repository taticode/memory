

function iniciar(){



    document.querySelectorAll(".tarjeta").forEach(function(elemento) {
    
        elemento.addEventListener("click", descubrir);
    });
    document.querySelector("#mov").innerText = '0';
    document.querySelector('#feedback').classList.remove('visible');

}

