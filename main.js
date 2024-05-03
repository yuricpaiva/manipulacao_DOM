document.getElementById('form').addEventListener('submit', function(event) {
    var campoA = document.getElementById('campoA').value
    var campoB = document.getElementById('campoB').value
    var botao = document.getElementById("botao")

    if(campoB<campoA) {
        event.preventDefault
        alert("Numero campo B é menor do que o numero do campo A")
    }else {
        alert("Enviando formulário...")
    }
})