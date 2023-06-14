

function actualizarMovs(){

    movimientos ++;

    movimientosTexto = movimientos;


    if ( movimientos < 10 ) {
        movimientos = '0' + movimientos;
    }

    document.querySelector("#mov").innerText = movimientosTexto;

}