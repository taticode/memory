function descubrir() {
    let descubiertas;
    let totaldescubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
    let tarjetasPendientes;

if (totaldescubiertas.length > 1) {
    return;
}

this.classList.add("descubierta");

descubiertas = document.querySelectorAll(".descubierta:not(.acertada)");
if (descubiertas.length < 2) {
    return;
}

comparar(descubiertas);
actualizarMovs();

tarjetasPendientes = document.querySelectorAll(".tarjeta:not(.acertada)");
if (tarjetasPendientes.length === 0){
    setTimeout(feedback, 500); 
}
}

function comparar(tarjetasAComparar) {
    if (tarjetasAComparar[0].classList.contains(tarjetasAComparar[1].classList[1])) {
      acierto(tarjetasAComparar);
    } else {
      error(tarjetasAComparar);
    }
  }