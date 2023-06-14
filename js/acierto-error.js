
function acierto(tarjetasComparadas) {
  tarjetasComparadas.forEach(function(elemento){
    elemento.classList.add("acertada");
  })

}


function error(tarjetasComparadas) {
  tarjetasComparadas.forEach(function(elemento){
    setTimeout(function(){
      elemento.classList.remove("descubierta");
    }, 1000);

  })
}

