
let movimientos = 0;
let movimientosTexto;
let selectedArray;
let tarjetasBarajadas;



let animales = [
    {
        clave: 'gamba',
        languages: {
            spanish: 'gamba',
            english: 'shrimp'
        },
        icono: './assets/img/animales/shrimp.png'
    },
    {
        clave: 'delfin',
        languages: {
            spanish: 'delfín',
            english: 'dolphin'
        },
        icono: './assets/img/animales/dolphin.png'
    },
    {
        clave: 'pez',
        languages: {
            spanish: 'pez',
            english: 'fish'
        },
        icono: './assets/img/animales/fish.png'
    },
    {
        clave: 'rana',
        languages: {
            spanish: 'rana',
            english: 'frog'
        },
        icono: './assets/img/animales/frog.png'
    },
    {
        clave: 'saltamontes',
        languages: {
            spanish: 'saltamontes',
            english: 'grasshopper'
        },
        icono: './assets/img/animales/grasshopper.png'
    },
    {
        clave: 'mariquita',
        languages: {
            spanish: 'mariquita',
            english: 'ladybug'
        },
        icono: './assets/img/animales/ladybug.png'
    },
    {
        clave: 'suricata',
        languages: {
            spanish: 'suricata',
            english: 'meerkat'
        },
        icono: './assets/img/animales/meerkat.png'
    },
    {
        clave: 'pulpo',
        languages: {
            spanish: 'pulpo',
            english: 'octopus'
        },
        icono: './assets/img/animales/octopus.png'
    },
    {
        clave: 'pinguino',
        languages: {
            spanish: 'pingüino',
            english: 'penguin'
        },
        icono: './assets/img/animales/penguin.png'
    },
    {
        clave: 'osopolar',
        languages: {
            spanish: 'oso polar',
            english: 'polar bear'
        },
        icono: './assets/img/animales/polar-bear.png'
    },
    {
        clave: 'conejo',
        languages: {
            spanish: 'conejo',
            english: 'rabbit'
        },
        icono: './assets/img/animales/rabbit.png'
    },
    {
        clave: 'foca',
        languages: {
            spanish: 'foca',
            english: 'seal'
        },
        icono: './assets/img/animales/seal.png'
    },
    {
        clave: 'caracol',
        languages: {
            spanish: 'caracol',
            english: 'snail'
        },
        icono: './assets/img/animales/snail.png'
    },
    {
        clave: 'tortuga',
        languages: {
            spanish: 'tortuga',
            english: 'turtle'
        },
        icono: './assets/img/animales/turtle.png'
    },
    {
        clave: 'ballena',
        languages: {
            spanish: 'ballena',
            english: 'whale'
        },
        icono: './assets/img/animales/whale.png'
    },
    {
        clave: 'cebra',
        languages: {
            spanish: 'cebra',
            english: 'zebra'
        },
        icono: './assets/img/animales/zebra.png'
    },
    {
        clave: 'gato',
        languages: {
            spanish: 'gato',
            english: 'cat'
        },
        icono: './assets/img/animales/cat.png'
    },
    {
        clave: 'camaleon',
        languages: {
            spanish: 'camaleón',
            english: 'chameleon'
        },
        icono: './assets/img/animales/chameleon.png'
    },
]
let vegetales = [

    {
        clave: 'pimiento',
        languages: {
            spanish: 'pimiento',
            english: 'bell pepper'
        },
        icono: './assets/img/vegetales/bell-pepper.png'
    },
    {
        clave: 'sandia',
        languages: {
            spanish: 'sandía',
            english: 'watermelon'
        },
        icono: './assets/img/vegetales/watermelon.png'
    },
    {
        clave: 'pomelo',
        languages: {
            spanish: 'pomelo',
            english: 'grapefruit'
        },
        icono: './assets/img/vegetales/grapefruit.png'
    },
    {
        clave: 'fresa',
        languages: {
            spanish: 'fresa',
            english: 'strawberry'
        },
        icono: './assets/img/vegetales/strawberry.png'
    },
    {
        clave: 'maiz',
        languages: {
            spanish: 'maíz',
            english: 'corn'
        },
        icono: './assets/img/vegetales/corn.png'
    },
    {
        clave: 'aguacate',
        languages: {
            spanish: 'aguacate',
            english: 'avocado'
        },
        icono: './assets/img/vegetales/avocado.png'
    },

    {
        clave: 'brocoli',
        languages: {
            spanish: 'brócoli',
            english: 'broccoli'
        },
        icono: './assets/img/vegetales/broccoli.png'
    },
    {
        clave: 'zanahoria',
        languages: {
            spanish: 'zanahoria',
            english: 'carrot'
        },
        icono: './assets/img/vegetales/carrot.png'
    },

    {
        clave: 'ajo',
        languages: {
            spanish: 'ajo',
            english: 'garlic'
        },
        icono: './assets/img/vegetales/garlic.png'
    },
    {
        clave: 'setas',
        languages: {
            spanish: 'setas',
            english: 'mushrooms'
        },
        icono: './assets/img/vegetales/mushroom.png'
    },
    {
        clave: 'papaya',
        languages: {
            spanish: 'papaya',
            english: 'papaya'
        },
        icono: './assets/img/vegetales/papaya.png'
    },
    {
        clave: 'espinaca',
        languages: {
            spanish: 'espinaca',
            english: 'spinach'
        },
        icono: './assets/img/vegetales/spinach.png'
    },
    {
        clave: 'tomate',
        languages: {
            spanish: 'tomate',
            english: 'tomato'
        },
        icono: './assets/img/vegetales/tomato.png'
    },
    {
        clave: 'acelga',
        languages: {
            spanish: 'acelga',
            english: 'chard'
        },
        icono: './assets/img/vegetales/chard.png'
    },
    {
        clave: 'rabano',
        languages: {
            spanish: 'rábano',
            english: 'radish'
        },
        icono: './assets/img/vegetales/radish.png'
    },
    {
        clave: 'alcachofa',
        languages: {
            spanish: 'alcachofa',
            english: 'artichoke'
        },
        icono: './assets/img/vegetales/artichoke.png'
    },
    {
        clave: 'berenjena',
        languages: {
            spanish: 'berenjena',
            english: 'eggplant'
        },
        icono: './assets/img/vegetales/eggplant.png'
    },
    {
        clave: 'puerro',
        languages: {
            spanish: 'puerro',
            english: 'leek'
        },
        icono: './assets/img/vegetales/leek.png'
    },
]
let comida = [

    {
        clave: 'pan',
        languages: {
            spanish: 'pan',
            english: 'bread'
        },
        icono: './assets/img/comida/bread.png'
    },

    {
        clave: 'mermelada',
        languages: {
            spanish: 'mermelada',
            english: 'jam'
        },
        icono: './assets/img/comida/jam.png'
    },
    {
        clave: 'hamburguesa',
        languages: {
            spanish: 'hamburguesa',
            english: 'burger'
        },
        icono: './assets/img/comida/burger.png'
    },
    {
        clave: 'cuscus',
        languages: {
            spanish: 'cuscús',
            english: 'couscous'
        },
        icono: './assets/img/comida/couscous.png'
    },
    {
        clave: 'patatasfritas',
        languages: {
            spanish: 'patatas fritas',
            english: 'french fries'
        },
        icono: './assets/img/comida/french-fries.png'
    },
    {
        clave: 'huevofrito',
        languages: {
            spanish: 'huevo frito',
            english: 'fried egg'
        },
        icono: './assets/img/comida/fried-egg.png'
    },

    {
        clave: 'miel',
        languages: {
            spanish: 'miel',
            english: 'honey'
        },
        icono: './assets/img/comida/honey.png'
    },

    {
        clave: 'perrito',
        languages: {
            spanish: 'perrito caliente',
            english: 'hot-dog'
        },
        icono: './assets/img/comida/hot-dog.png'
    },

    {
        clave: 'te',
        languages: {
            spanish: 'té',
            english: 'tea'
        },
        icono: './assets/img/comida/tea.png'
    },

    {
        clave: 'helado',
        languages: {
            spanish: 'helado',
            english: 'ice cream'
        },
        icono: './assets/img/comida/ice-cream.png'
    },
    {
        clave: 'leche',
        languages: {
            spanish: 'leche',
            english: 'milk'
        },
        icono: './assets/img/comida/milk.png'
    },


    {
        clave: 'tortitas',
        languages: {
            spanish: 'tortitas',
            english: 'pancakes'
        },
        icono: './assets/img/comida/pancake.png'
    },

    {
        clave: 'pizza',
        languages: {
            spanish: 'pizza',
            english: 'pizza'
        },
        icono: './assets/img/comida/pizza.png'
    },
    {
        clave: 'arroz',
        languages: {
            spanish: 'arroz',
            english: 'rice'
        },
        icono: './assets/img/comida/rice.png'
    },


    {
        clave: 'ensalada',
        languages: {
            spanish: 'ensalada',
            english: 'salad'
        },
        icono: './assets/img/comida/salad.png'
    },

    {
        clave: 'brocheta',
        languages: {
            spanish: 'brocheta',
            english: 'skewer'
        },
        icono: './assets/img/comida/skewer.png'
    },
    {
        clave: 'atun',
        languages: {
            spanish: 'atún',
            english: 'tuna'
        },
        icono: './assets/img/comida/tuna.png'
    },

    {
        clave: 'pavo',
        languages: {
            spanish: 'pavo asado',
            english: 'roasted turkey'
        },
        icono: './assets/img/comida/turkey.png'
    },
];

let eventos = [
    {
        clave: 'globos',
        languages: {
            spanish: 'globos',
            english: 'balloons'
        },
        icono: './assets/img/fiesta/balloons.png'
    },
    {
        clave: 'tarta',
        languages: {
            spanish: 'tarta',
            english: 'cake'
        },
        icono: './assets/img/fiesta/cake.png'
    },
    {
        clave: 'champan',
        languages: {
            spanish: 'champán',
            english: 'champagne'
        },
        icono: './assets/img/fiesta/champagne.png'
    },
    {
        clave: 'invitados',
        languages: {
            spanish: 'invitados',
            english: 'guests'
        },
        icono: './assets/img/fiesta/guests.png'
    },
    {
        clave: 'guirnaldas',
        languages: {
            spanish: 'guirnaldas',
            english: 'garlands'
        },
        icono: './assets/img/fiesta/garlands.png'
    },
    {
        clave: 'regalo',
        languages: {
            spanish: 'regalo',
            english: 'gift'
        },
        icono: './assets/img/fiesta/gift.png'
    },
    {
        clave: 'diadema',
        languages: {
            spanish: 'diadema',
            english: 'headband'
        },
        icono: './assets/img/fiesta/headband.png'
    },
    {
        clave: 'mascara',
        languages: {
            spanish: 'máscara',
            english: 'mask'
        },
        icono: './assets/img/fiesta/mask.png'
    },
    {
        clave: 'microfono',
        languages: {
            spanish: 'micrófono',
            english: 'microphone'
        },
        icono: './assets/img/fiesta/microphone.png'
    },
    {
        clave: 'musica',
        languages: {
            spanish: 'música',
            english: 'music'
        },
        icono: './assets/img/fiesta/music.png'
    },
    {
        clave: 'matasuegras',
        languages: {
            spanish: 'matasuegras',
            english: 'party blower'
        },
        icono: './assets/img/fiesta/party-blower.png'
    },
    {
        clave: 'sombrero',
        languages: {
            spanish: 'sombrero',
            english: 'hat'
        },
        icono: './assets/img/fiesta/party-hat.png'
    },
    {
        clave: 'pinata',
        languages: {
            spanish: 'piñata',
            english: 'pinata'
        },
        icono: './assets/img/fiesta/pinata.png'
    },

    {
        clave: 'popcorn',
        languages: {
            spanish: 'palomitas',
            english: 'popcorn'
        },
        icono: './assets/img/fiesta/popcorn.png'
    },
    {
        clave: 'sandwich',
        languages: {
            spanish: 'sandwich',
            english: 'sandwich'
        },
        icono: './assets/img/fiesta/sandwich.png'
    },
    {
        clave: 'altavoz',
        languages: {
            spanish: 'altavoz',
            english: 'speaker'
        },
        icono: './assets/img/fiesta/speaker.png'
    },
    {
        clave: 'focos',
        languages: {
            spanish: 'focos',
            english: 'spotlights'
        },
        icono: './assets/img/fiesta/spotlight.png'
    },
    {
        clave: 'silbato',
        languages: {
            spanish: 'silbato',
            english: 'whistle'
        },
        icono: './assets/img/fiesta/whistle.png'
    }
]


let categorias = ['animales', 'vegetales', 'comida', 'eventos'];
