function calcularIMC() {
    var altura = parseFloat(document.getElementById('altura').value);
    var peso = parseFloat(document.getElementById('peso').value);

    if (altura && peso) {
        var imc = peso / (altura * altura);
        document.getElementById('imcResultado').innerText = "Seu IMC é: " + imc.toFixed(2);
    } else {
        document.getElementById('imcResultado').innerText = "Por favor, insira valores válidos.";
    }
}

function limparCampos() {
    document.getElementById('imcForm').reset();
    document.getElementById('imcResultado').innerText = "";
}

function exibirTexto() {
    var texto = document.getElementById("hiddenText");
    var botao = document.getElementById("readMore");


    if (texto.style.display === "none") {
        texto.style.display = "block";
        botao.innerText = "Ocultar";

    } else {
        texto.style.display = "none";
        botao.innerText = "Leia mais";

    }
}