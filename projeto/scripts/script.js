const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtn = document.getElementById("btn-one");
const nextBtn1 = document.getElementById("btn-two");
const nextBtn2 = document.getElementById("btn-three");
const nextBtn3 = document.getElementById("btn-four");
const startBtn = document.querySelectorAll(".btn-start");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");


/* Variaveis globais */

var janela = 2.00 * 1.20;
var porta = 0.80 * 1.90;
var area1 = 0;
var area2 = 0;
var area3 = 0;
var area4 = 0;
var areaJanela = 0;
var areaPorta = 0;
var areaTotal = 0;

let formStepsNum = 0;

/* Botão que inicia a calculadora */

startBtn.forEach(btn => {
    btn.addEventListener("click", () => {
        formStepsNum++;
        updateFormSteps();
        updateProgressBar();
    });
});

/* Comportamento do botão avançar para cada page */

nextBtn.addEventListener("click", pageOne);
nextBtn1.addEventListener("click", pageTwo);
nextBtn2.addEventListener("click", pageThree);
nextBtn3.addEventListener("click", pageFour);

/* Comportamento para o botão voltar */

prevBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressBar();
    });
});


/* Função para atualizar etapa do form */

function updateFormSteps() {
    formSteps.forEach((formStep) => {
        formStep.classList.contains("form-step-active") &&
            formStep.classList.remove("form-step-active");
    });



    formSteps[formStepsNum].classList.add("form-step-active");
}

/* Função para atualizar a progressbar */

function updateProgressBar() {
    progressSteps.forEach((progressStep, idx) => {
        if (idx < formStepsNum + 1) {
            progressStep.classList.add("progress-step-active")
        } else {
            progressStep.classList.remove("progress-step-active");
        }
    });

    const progressActive = document.querySelectorAll(".progress-step-active");

    progress.style.width =
        ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}

/* Função para definir altura minima da parede caso a mesma possua porta */

function hasDoor(qtdPorta, porta, areaPorta) {
    parseFloat(qtdPorta);
    if (qtdPorta > 0) {
        var altMin = 2.20;
        console.log(altMin);
    }
    return altMin;
};

/* Função para definir a area total das portas, caso haja mais de uma */

function defDoor(qtdPorta, porta, areaPorta) {
    parseFloat(qtdPorta);
    if (qtdPorta >= 0) {
        areaPorta = qtdPorta * porta;
        somaPorta = areaPorta;
        return somaPorta;
    }
};

/* Função para definir a areta total das janelas, caso haja mais de uma */

function defWindow(qtdJanela, janela, areaJanela) {
    parseFloat(qtdJanela);
    if (qtdJanela >= 0) {
        areaJanela = qtdJanela * janela;
        soma = areaJanela;
        console.log("somou", soma);
        return soma;
    }
};

/* Função para definir a area total a ser pintada */

function defAreaTotal(area1, area2, area3, area4) {
    return area1 + area2 + area3 + area4;
};

/* Função para calcular a área de uma unica parede */

function defArea(altura, largura) {
    return altura * largura;
};

/* Mini validação para evitar que os campos altura e largura fiquem vazios */

function emptyField(altura = 0, largura = 0) {
    if (((altura == "") && (altura <= 0)) || ((largura == "") && (largura <= 0))) {
        alert("Os campos altura e largura não podem ficar vazios!");
        return false;
    }
    return true;
}

/* Validações do formulário da primeira pagina */

function validateFormOne() {
    var largura = document.getElementById("largura1").value;
    var altura = document.getElementById("altura1").value;
    var qtdJanela = document.getElementById("qtdJanela1").value;
    var qtdPorta = document.getElementById("qtdPorta1").value;

    valid = emptyField(altura, largura);
    area1 = altura * largura;
    console.log("Area1 = ", area1);
    if ((area1 < 1) || (area1 > 15)) {
        alert("A área deve ser maior que 1 metro e menor que 15 metros quadrados!");
        valid = false;
        return valid;
    }
    let somaJanela = defWindow(qtdJanela, janela, areaJanela);
    console.log("Soma janela", somaJanela);
    var altMin = hasDoor(qtdPorta, porta, areaPorta);
    if (altura < altMin) {
        alert("Paredes com portas devem possuir 30cm a mais que a altura da porta! Minimo de 2.20m");
        valid = false;
        return valid;
    }
    let somaPorta = defDoor(qtdPorta, porta, areaPorta);
    console.log("Porta", somaPorta);
    somaJanelaPorta = somaJanela + somaPorta;
    area1 = ((altura * largura) - somaJanelaPorta);
    if (somaJanelaPorta > (area1 / 2)) {
        alert("A soma das áreas das portas e janelas deve ser de, no maximo, 50% do valor da parede!");
        valid = false;
        return valid;
    }
    var areaTotal = defAreaTotal(area1, area2, area3, area4);
    console.log("Area T = ", areaTotal);
    valid = true;
    return valid;
}

/* Validações do formulário da segunda pagina */

function validateFormTwo() {
    var largura = document.getElementById("largura2").value;
    var altura = document.getElementById("altura2").value;
    var qtdJanela = document.getElementById("qtdJanela2").value;
    var qtdPorta = document.getElementById("qtdPorta2").value;
    var somaJanelaPorta = 0;

    valid = emptyField(altura, largura);
    area2 = (altura * largura);
    console.log("Area2 = ", area2);
    if ((area2 < 1) || (area2 > 15)) {
        alert("A área deve ser maior que 1 metro e menor que 15 metros quadrados!");
        return false;
    }
    let somaJanela = defWindow(qtdJanela, janela, areaJanela);
    console.log("Soma janela", somaJanela);
    var altMin = hasDoor(qtdPorta, porta, areaPorta);
    if (altura < altMin) {
        alert("Paredes com portas devem possuir 30cm a mais que a altura da porta! Minimo de 2.20m");
        valid = false;
        return valid;
    }
    let somaPorta = defDoor(qtdPorta, porta, areaPorta);
    console.log("Puerta", somaPorta);
    somaJanelaPorta = somaJanela + somaPorta;
    area2 = ((altura * largura) - somaJanelaPorta);
    if (somaJanelaPorta > (area2 / 2)) {
        alert("A soma das áreas das portas e janelas deve ser de, no maximo, 50% do valor da parede!");
        valid = false;
        return valid;
    }
    var areaTotal = defAreaTotal(area1, area2, area3, area4);
    console.log("Area T = ", areaTotal);
    valid = true;
    return valid;
}

/* Validações do formulário da terceira pagina */

function validateFormThree() {
    var largura = document.getElementById("largura3").value;
    var altura = document.getElementById("altura3").value;
    var qtdJanela = document.getElementById("qtdJanela3").value;
    var qtdPorta = document.getElementById("qtdPorta3").value;
    var somaJanelaPorta = 0;

    valid = emptyField(altura, largura);
    area3 = (altura * largura);
    console.log("Area3 = ", area3);
    if ((area3 < 1) || (area3 > 15)) {
        alert("A área deve ser maior que 1 metro e menor que 15 metros quadrados!");
        return false;
    }
    if (qtdJanela >= 0) {
        areaJanela = qtdJanela * janela;
        somaJanelaPorta = areaJanela + areaPorta;
    }
    if (qtdPorta >= 0) {
        areaPorta = qtdPorta * porta;
        somaJanelaPorta = areaJanela + areaPorta;
    }
    area3 = ((altura * largura) - somaJanelaPorta);
    console.log("Soma da area da janela e porta da parede 3 = ", somaJanelaPorta);
    if (somaJanelaPorta > (area3 / 2)) {
        alert("A soma das áreas das portas e janelas deve ser de, no maximo, 50% do valor da parede!");
        return false;
    }
    areaTotal = area1 + area2 + area3 + area4;
    console.log("Area T = ", areaTotal);
    valid = true;
    return valid;
}

/* Validações do formulário da ultima pagina com input, bem como os calculos que trazem o resultado final */

function validateFormFour() {
    var largura = document.getElementById("largura4").value;
    var altura = document.getElementById("altura4").value;
    var qtdJanela = document.getElementById("qtdJanela4").value;
    var qtdPorta = document.getElementById("qtdPorta4").value;
    var somaJanelaPorta = 0;
    var totalTinta = 0;

    valid = emptyField(altura, largura);
    area4 = (altura * largura);
    console.log("Area4 = ", area4);
    if ((area4 < 1) || (area4 > 15)) {
        alert("A área deve ser maior que 1 metro e menor que 15 metros quadrados!");
        valid = false;
    }
    if (qtdJanela >= 0) {
        areaJanela = qtdJanela * janela;
        somaJanelaPorta = areaJanela + areaPorta;
    }
    if (qtdPorta >= 0) {
        areaPorta = qtdPorta * porta;
        somaJanelaPorta = areaJanela + areaPorta;
    }
    area4 = ((altura * largura) - somaJanelaPorta);
    console.log("Soma da area da janela e porta da parede 4 = ", somaJanelaPorta);
    if (somaJanelaPorta > (area4 / 2)) {
        alert("A soma das áreas das portas e janelas deve ser de, no maximo, 50% do valor da parede!");
        return false;
    }
    areaTotal = area1 + area2 + area3 + area4;
    console.log("Area T = ", areaTotal);
    totalTinta = areaTotal / 5;
    roundTotalTinta = parseFloat(totalTinta.toFixed(2));
    if (totalTinta > 0) {
        lataG = 18;
        lataM = 3.6;
        lataP = 2.5;
        lataPp = 0.5;
        var quoG = Math.floor(totalTinta / lataG);
        restG = totalTinta % lataG;
        console.log(" restando", restG);
        if ((restG < 18) || (restG > lataM)) {
            var quoM = Math.floor(restG / lataM);
            restM = restG % lataM;
            console.log("restando2", restM);
        }
        if ((restM < 3.6) || (restM >= 2.5)) {
            var quoP = Math.floor(restM / lataP);
            restP = restM % lataP;
            console.log("restando3", restP);
        }
        if ((restP < 2.5) || (restP >= 0.5)) {
            var quoPp = Math.floor(restP / lataPp);
            restPp = restP % lataPp;
            console.log("restando4", restPp);
        }
        if ((restPp < 0.5) && (restPp > 0)) {
            quoPp++;
        }
    }
    console.log("O total de tinta necessário é: ", totalTinta);
    document.getElementById("resultadoMetros").innerHTML = "A área total de paredes a serem pintadas é: " + areaTotal + "m²";
    document.getElementById("resultadoTinta").innerHTML = "Para isso, você irá precisar de: " + roundTotalTinta + " litros de tinta";
    document.getElementById("resultadoLata").innerHTML = "Que pode ser distribuido em: " + "<br>" + quoG + " latas de 18L, " + "<br>" + quoM + " latas de 3,6L, " + "<br>" + quoP + " latas de 2,5L, " + "<br>" + quoPp + " latas de 0,5L.";
    valid = true;
    return valid;
}

function pageOne() {
    validateFormOne();
    if (valid == true) {
        formStepsNum++;
        updateFormSteps();
        updateProgressBar();
    }
}

function pageTwo() {
    validateFormTwo();
    if (valid == true) {
        formStepsNum++;
        updateFormSteps();
        updateProgressBar();
    }
}

function pageThree() {
    validateFormThree();
    if (valid == true) {
        formStepsNum++;
        updateFormSteps();
        updateProgressBar();
    }
}

function pageFour() {
    validateFormFour();
    if (valid == true) {
        formStepsNum++;
        updateFormSteps();
        updateProgressBar();
    }
}