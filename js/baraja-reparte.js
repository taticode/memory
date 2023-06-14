

let tarjetasBarajadas = barajaTarjetas();
let mesa = document.querySelector("#mesa");

function barajaTarjetas() {

    let resultado;
    resultado = totalTarjetas.sort(function() {
    return 0.5 - Math.random();
    });

return resultado;
}


function reparteTarjetas() {

mesa.innerHTML = "";

tarjetasBarajadas.forEach( function(elemento) {
    let clave = ``+ elemento.clave +` `;
    let tarjeta =  document.createElement("article");
    tarjeta.classList.add("tarjeta");
    tarjeta.setAttribute("id", clave)

    tarjeta.innerHTML =
    `
    <div class="contenido `+ elemento.language +`">
        <img class="icon" src="`+ elemento.icono + `" alt=" `+ elemento.nombre +` ">
        <p class="nombre"> `+ elemento.nombre +`</p> 
    </div>
    
    `

    mesa.appendChild(tarjeta);

    tarjeta.classList.add("aparecer");

    })

}