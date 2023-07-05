import { state } from './utils.js';

document.addEventListener('DOMContentLoaded', function () {
    // Crear menu
    let mesa = document.querySelector("#mesa");
    let menu = document.querySelector('#menu');
    let ul = document.createElement('ul');
    state.categorias.forEach(nombre => {
        let li = document.createElement('li');
        li.addEventListener('click', () => {
            if (nombre === 'animales') {
                state.selectedArray = state.animales;
            } else if (nombre === 'vegetales') {
                state.selectedArray = state.vegetales;
            }
            else if (nombre === 'comida') {
                state.selectedArray = state.comida;
            }
            else if (nombre === 'eventos') {
                state.selectedArray = state.eventos;
            }
            reparteTarjetas()
            iniciar()
            iniciarCronometro()
        });
        li.textContent = nombre.charAt(0).toUpperCase() + nombre.slice(1);
        ul.appendChild(li);
    });
    // Agregar la lista al contenedor del menú
    menu.appendChild(ul);

    // Acierto Error
    function acierto(tarjetasComparadas) {
        tarjetasComparadas.forEach(function (elemento) {
            elemento.classList.add("acertada");
        })
    }
    function error(tarjetasComparadas) {
        tarjetasComparadas.forEach(function (elemento) {
            setTimeout(function () {
                elemento.classList.remove("descubierta");
            }, 1000);
        })
    }

    // Baraja reparte
    function barajaArray(array) {
        let resultado = array.sort(function () {
            return 0.5 - Math.random();
        });

        return resultado;

    }
    function reparteTarjetas() {
        state.tarjetasBarajadas = barajaArray(state.selectedArray)
        let copiaIngles = state.tarjetasBarajadas.map(copiaIngles => ({ ...copiaIngles, chosen: 'english' }));
        let copiaEspanol = state.tarjetasBarajadas.map(copiaEspanol => ({ ...copiaEspanol, chosen: 'spanish' }));
        let tarjetasTotales = copiaIngles.concat(copiaEspanol);
        mesa.innerHTML = "";
        let tarjetasMezcladas = []; // Nuevo array para las tarjetas mezcladas
        tarjetasTotales.forEach(function (elemento) {
            let tarjeta = document.createElement("article");
            let clave = elemento.clave;
            tarjeta.classList.add("tarjeta", clave);
            if (elemento.chosen === 'english') {
                tarjeta.innerHTML = `
            <div class="contenido `+ clave + ` english">
                <img class="icon" src="${elemento.icono}" alt="${elemento.languages.english}">
                <p class="nombre">${elemento.languages.english}</p> 
            </div>
            `;
            } else if (elemento.chosen === 'spanish') {
                tarjeta.innerHTML = `
            <div class="contenido `+ clave + ` spanish">
                <img class="icon" src="${elemento.icono}" alt="${elemento.languages.spanish}">
                <p class="nombre">${elemento.languages.spanish}</p> 
            </div>
            `;
            }
            tarjetasMezcladas.push(tarjeta); // Agregar la tarjeta al array mezclado
        });
        shuffle(tarjetasMezcladas); // Mezclar aleatoriamente el array de tarjetas
        tarjetasMezcladas.forEach(function (tarjeta) {
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

    // Contador de movimientos
    function actualizarMovs() {
        state.movimientos++;
        state.movimientosTexto = state.movimientos;
        if (state.movimientos < 10) {
            state.movimientos = '0' + state.movimientos;
        }
        document.querySelector("#mov").innerText = state.movimientosTexto;
    }



    // Cronometro
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

    // Descubrir comparar
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
        if (tarjetasPendientes.length === 0) {
            setTimeout(feedback, 500);
            pausarCronometro()
        }
    }
    function comparar(tarjetasAComparar) {
        if (tarjetasAComparar[0].classList.contains(tarjetasAComparar[1].classList[1])) {
            acierto(tarjetasAComparar);
        } else {
            error(tarjetasAComparar);
        }
    }

    // Iniciar
    function iniciar() {
        document.querySelectorAll(".tarjeta").forEach(function (elemento) {
            elemento.addEventListener("click", descubrir);
        });
        document.querySelector("#mov").innerText = '0';
        document.querySelector('#feedback').classList.remove('visible');
    }

    // Finalizar
    function feedback() {
        document.querySelector('#feedback').classList.add('visible');
    }
    function ocultarFeedback() {
        document.querySelector('#feedback').classList.remove('visible');
    }
    let croupier = document.querySelector(".croupier");
    croupier.addEventListener("click", (ocultarFeedback));








});

