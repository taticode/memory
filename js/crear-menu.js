


let mesa = document.querySelector("#mesa");

let menu = document.querySelector('#menu');
let ul = document.createElement('ul');
categorias.forEach(nombre => {

    let li = document.createElement('li');

    li.addEventListener('click', () => {


    if (nombre === 'animales') {
        selectedArray = animales;
      } else if (nombre === 'vegetales') {
        selectedArray = vegetales;
      }
      else if (nombre === 'comida') {
        selectedArray = comida;
      }
      else if (nombre === 'eventos') {
        selectedArray = eventos;
      }
      
  
      console.log(selectedArray);
      reparteTarjetas()
      iniciar()

    });
    li.textContent = nombre.charAt(0).toUpperCase() + nombre.slice(1);

    ul.appendChild(li);
});


// Agregar la lista al contenedor del menú
menu.appendChild(ul);