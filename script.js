let creditos = 0;
let tempo = 0;

const minarButton = document.getElementById("minarButton");
const creditosDisplay = document.getElementById("creditos");
const tempoDisplay = document.getElementById("tempo");

minarButton.addEventListener("click", function() {
    creditos++;
    creditosDisplay.textContent = creditos;
});

// Atualizar o tempo a cada segundo
setInterval(() => {
    tempo++;
    tempoDisplay.textContent = tempo;
}, 1000);

