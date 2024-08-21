//compara.js

document.getElementById("meuFormulario").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    compararNumeros();
});

function compararNumeros() {

    const numeroA = parseFloat(document.getElementById('campoA').value);
    const numeroB = parseFloat(document.getElementById('campoB').value);

    if (isNaN(numeroA) || isNaN(numeroB)) {
        alert('Por favor, insira números válidos em ambos os campos.');
    } else {
        if (numeroA < numeroB) {
            alert('Número B é maior que o número A.');
        } else if (numeroA > numeroB) {
            alert('Número A é maior que o número B.');
        } else {
            alert('Os números são iguais.');
        }
    }
}


