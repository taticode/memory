var grupoTarjetas = ["🦄", "🍦", "🌈", "👽", "👾", "🤖", "👹", "👺"];

var totalTarjetas = grupoTarjetas.concat(grupoTarjetas);

function barajaTarjetas() {
  var resultado;
  resultado = totalTarjetas.sort(function() {
    return 0.5 - Math.random();
  });
  return resultado;
}

function reparteTarjetas() {
  var mesa = document.querySelector("#mesa");
  var tarjetasBarajadas = barajaTarjetas();
  mesa.innerHTML = "";

  tarjetasBarajadas.forEach(function(elemento) {
    var tarjeta = document.createElement("div");

    tarjeta.innerHTML =
      "<div class='tarjeta'>" +
      "<div class='tarjeta__contenido'>" +
      elemento +
      "</div>" +
      "</div>";

    mesa.appendChild(tarjeta);
  });
}

function descubrir() {
  this.classList.add("descubierta");
}

reparteTarjetas();

document.querySelectorAll(".tarjeta").forEach(function(elemento) {
  elemento.addEventListener("click", descubrir);
});
