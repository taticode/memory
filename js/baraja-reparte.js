

function barajaArray(array) {
    let resultado = array.sort(function() {
        return 0.5 - Math.random();
    });

    return resultado;

} 

function reparteTarjetas() {
    tarjetasBarajadas = barajaArray(selectedArray)



let copiaIngles = tarjetasBarajadas.map(copiaIngles => ({ ...copiaIngles, chosen: 'english' }));
let copiaEspanol = tarjetasBarajadas.map(copiaEspanol => ({ ...copiaEspanol, chosen: 'spanish' }));

let tarjetasTotales = copiaIngles.concat(copiaEspanol);



    mesa.innerHTML = "";
    let tarjetasMezcladas = []; // Nuevo array para las tarjetas mezcladas

    tarjetasTotales.forEach(function(elemento) {
        let tarjeta = document.createElement("article");
        let clave = elemento.clave;
        tarjeta.classList.add("tarjeta", clave);

        if (elemento.chosen === 'english') {
            tarjeta.innerHTML = `
            <div class="contenido `+ clave +` english">
                <img class="icon" src="${elemento.icono}" alt="${elemento.languages.english}">
                <p class="nombre">${elemento.languages.english}</p> 
            </div>
            `;
        } else if (elemento.chosen === 'spanish') {
            tarjeta.innerHTML = `
            <div class="contenido `+ clave +` spanish">
                <img class="icon" src="${elemento.icono}" alt="${elemento.languages.spanish}">
                <p class="nombre">${elemento.languages.spanish}</p> 
            </div>
            `;
        }

        tarjetasMezcladas.push(tarjeta); // Agregar la tarjeta al array mezclado
    });

    shuffle(tarjetasMezcladas); // Mezclar aleatoriamente el array de tarjetas

    tarjetasMezcladas.forEach(function(tarjeta) {
        mesa.appendChild(tarjeta);
        tarjeta.classList.add("aparecer");
    });
}

// Función para barajar (mezclar) un array usando el algoritmo de Fisher-Yates
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}




