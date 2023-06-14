
let movimientos = 0;
let movimientosTexto;


let spanish = [
    {
        clave: 'pimiento',
        nombre: 'pimiento',
        icono: './assets/img/bell-pepper.png',
        language: 'spanish'
      }, 
 
    {
      clave: 'tarta',
      nombre: 'tarta',
      icono: './assets/img/cake.png',
      language: 'spanish'
    },
          /*  
    {
      clave: 'sandia',
      nombre: 'sandía',
      icono: './assets/img/watermelon.png',
      sound: './assets/sounds/cake.mp3',
      language: 'spanish'
    },
    {
      clave: 'pomelo',
      nombre: 'pomelo',
      icono: './assets/img/grapefruit.png',
      sound: './assets/sounds/cake.mp3',
      language: 'spanish'
    },
    {
      clave: 'sal',
      nombre: 'sal',
      icono: './assets/img/salt.png',
      language: 'spanish'
    },
    {
      clave: 'fresa',
      nombre: 'fresa',
      icono: './assets/img/strawberry.png',
      language: 'spanish'
    },  
    {
      clave: 'maiz',
      nombre: 'maíz',
      icono: './assets/img/corn.png',
      language: 'spanish'
    }, 
    {
      clave: 'leche',
      nombre: 'leche',
      icono: './assets/img/milk.png',
      language: 'spanish'
    }, 
    {
      clave: 'salmon',
      nombre: 'salmón',
      icono: './assets/img/salmon.png',
      language: 'spanish'
    }, 
    {
      clave: 'aguacate',
      nombre: 'aguacate',
      icono: './assets/img/avocado.png',
      language: 'spanish'
    }, 
    {
      clave: 'platano',
      nombre: 'plátano',
      icono: './assets/img/banana.png',
      language: 'spanish'
    },   

  {
      clave: 'brocoli',
      nombre: 'brocoli',
      icono: './assets/img/broccoli.png',
      language: 'spanish'
    }, 
    {
      clave: 'zanahoria',
      nombre: 'zanahoria',
      icono: './assets/img/carrot.png',
      language: 'spanish'
    }, 
    {
      clave: 'cereal',
      nombre: 'cereal',
      icono: './assets/img/cereal.png',
      language: 'spanish'
    }, 
    {
      clave: 'ajo',
      nombre: 'ajo',
      icono: './assets/img/garlic.png',
      language: 'spanish'
    }, 
    {
      clave: 'miel',
      nombre: 'miel',
      icono: './assets/img/honey.png',
      language: 'spanish'
    }, 
    {
      clave: 'setas',
      nombre: 'setas',
      icono: './assets/img/mushroom.png',
      language: 'spanish'
    }, 
    {
      clave: 'papaya',
      nombre: 'papaya',
      icono: './assets/img/papaya.png',
      language: 'spanish'
    }, 
    {
      clave: 'arroz',
      nombre: 'arroz',
      icono: './assets/img/rice.png',
      language: 'spanish'
    }, 
    {
      clave: 'ensalada',
      nombre: 'ensalada',
      icono: './assets/img/salad.png',
      language: 'spanish'
    }, 
    {
      clave: 'gamba',
      nombre: 'gamba',
      icono: './assets/img/shrimp.png',
      language: 'spanish'
    }, 
    {
      clave: 'espinaca',
      nombre: 'espinaca',
      icono: './assets/img/spinach.png',
      language: 'spanish'
    }, 
    {
      clave: 'tomate',
      nombre: 'tomate',
      icono: './assets/img/tomato.png',
      language: 'spanish'
    }, 
    {
      clave: 'atun',
      nombre: 'atún',
      icono: './assets/img/tuna.png',
      language: 'spanish'
    }, */
]; 

let english = [
{
    clave: 'pimiento',
    nombre: 'bell-pepper',
    icono: './assets/img/bell-pepper.png',
    language: 'english'
    }, 

{
    clave: 'tarta',
    nombre: 'cake',
    icono: './assets/img/cake.png',
    sound: './assets/sounds/cake.mp3',
    language: 'english'
},
            /* 
{
    clave: 'sandia',
    nombre: 'watermelon',
    icono: './assets/img/watermelon.png',
    sound: './assets/sounds/cake.mp3',
    language: 'english'
},
{
    clave: 'pomelo',
    nombre: 'grapefruit',
    icono: './assets/img/grapefruit.png',
    sound: './assets/sounds/cake.mp3',
    language: 'english'
},
{
    clave: 'sal',
    nombre: 'salt',
    icono: './assets/img/salt.png',
    sound: './assets/sounds/salt.mp3',
    language: 'english'
},
{
    clave: 'fresa',
    nombre: 'strawberry',
    icono: './assets/img/strawberry.png',
    sound: './assets/sounds/strawberry.mp3',
    language: 'english'
}, 
{
    clave: 'maiz',
    nombre: 'corn',
    icono: './assets/img/corn.png',
    language: 'english'
}, 
{
    clave: 'leche',
    nombre: 'milk',
    icono: './assets/img/milk.png',
    language: 'english'
}, 
{
    clave: 'salmon',
    nombre: 'salmon',
    icono: './assets/img/salmon.png',
    language: 'english'
},   {
    clave: 'aguacate',
    nombre: 'avocado',
    icono: './assets/img/avocado.png',
    language: 'english'
}, 
{
    clave: 'platano',
    nombre: 'banana',
    icono: './assets/img/banana.png',
    language: 'english'
},   

{
    clave: 'brocoli',
    nombre: 'broccoli',
    icono: './assets/img/broccoli.png',
    language: 'english'
}, 
{
    clave: 'zanahoria',
    nombre: 'carrot',
    icono: './assets/img/carrot.png',
    language: 'english'
}, 
{
    clave: 'cereal',
    nombre: 'cereal',
    icono: './assets/img/cereal.png',
    language: 'english'
}, 
{
    clave: 'ajo',
    nombre: 'garlic',
    icono: './assets/img/garlic.png',
    language: 'english'
}, 
{
    clave: 'miel',
    nombre: 'honey',
    icono: './assets/img/honey.png',
    language: 'english'
}, 
{
    clave: 'setas',
    nombre: 'mushrooms',
    icono: './assets/img/mushroom.png',
    language: 'english'
}, 
{
    clave: 'papaya',
    nombre: 'papaya',
    icono: './assets/img/papaya.png',
    language: 'english'
}, 
{
    clave: 'arroz',
    nombre: 'rice',
    icono: './assets/img/rice.png',
    language: 'english'
}, 
{
    clave: 'ensalada',
    nombre: 'salad',
    icono: './assets/img/salad.png',
    language: 'english'
}, 
{
    clave: 'gamba',
    nombre: 'shrimp',
    icono: './assets/img/shrimp.png',
    language: 'english'
}, 
{
    clave: 'espinaca',
    nombre: 'spinach',
    icono: './assets/img/spinach.png',
    language: 'english'
}, 
{
    clave: 'tomate',
    nombre: 'tomato',
    icono: './assets/img/tomato.png',
    language: 'english'
}, 
{
    clave: 'atun',
    nombre: 'tuna',
    icono: './assets/img/tuna.png',
    language: 'english'
}, */
]; 


let totalTarjetas = spanish.concat(english);