function generaBiglietto() {
    let nome = document.getElementById('nome').value;
    let distanza = parseFloat(document.getElementById('distanza').value);
    let eta = parseInt(document.getElementById('eta').value);
    let tariffaBase = 0.21;
    let sconto = 0;

    if (eta < 18) {
        sconto = 0.2;
    } else if (eta >= 65) {
        sconto = 0.4;
    }

    let tariffaFinale = (tariffaBase * distanza) * (1 - sconto);

    document.getElementById('outputNome').textContent = nome;
    document.getElementById('outputDistanza').textContent = distanza;
    document.getElementById('outputEta').textContent = eta;
    document.getElementById('outputSconto').textContent = sconto;
    document.getElementById('outputTariffa').textContent = tariffaFinale.toFixed(2);

    document.getElementById('biglietto').style.display = 'block';
}
