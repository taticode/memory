

function feedback(){
    document.querySelector('#feedback').classList.add('visible');
}

function ocultarFeedback(){
    document.querySelector('#feedback').classList.remove('visible');
}
let croupier = document.querySelector(".croupier");
croupier.addEventListener("click",(ocultarFeedback ,iniciar));