const btn = document.querySelector(".btn-next");

var altura = "";
var largura = "";
var area = "";

function captura() {
    altura = document.getElementById("#altura1").value;
    largura = document.getAnimations("#largura1").value;
    console.log(altura);
    console.log(largura);
    area = altura * largura;
    console.log(area);
}

btn.addEventListener("click", captura());



let porta = 0.80 * 1.90;
let janela = 2.00 * 1.20;