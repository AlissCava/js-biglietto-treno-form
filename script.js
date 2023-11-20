// Funzione per generare il biglietto con i dati inseriti
function generaBiglietto() {
    let nome = document.getElementById('nome').value;
    let distanza = parseFloat(document.getElementById('distanza').value);
    let eta = parseInt(document.getElementById('eta').value);
    let tariffaBase = 0.21;
    let sconto = 0;


    let numeroCarrozza = Math.floor(Math.random() * 10) + 1;
    let codiceBiglietto = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;


    let tipoTariffa = "";

    // Calcola lo sconto in base all'età
    if (eta < 18) {
        sconto = 0.2;
    } else if (eta >= 65) {
        sconto = 0.4;
    }


    if (sconto > 0) {
        offerta = eta < 18 ? "Sconto Minorenne 20%" : "Sconto Over 65 30%";
        scontoApplicato = sconto * 100 + "% di sconto";

        // Determina il tipo di tariffa in base allo sconto
        if (sconto === 0.2) 
        {
            tipoTariffa = "Tariffa Minorenni";
        } 
        else if (sconto === 0.4) 
        {
            tipoTariffa = "Tariffa Over 65";
        }
        
    } 
    
    else 
    {
        tipoTariffa = "Tariffa Standard";
    }

    // Calcola la tariffa finale con lo sconto applicato
    let tariffaFinale = (tariffaBase * distanza) * (1 - sconto);

    // Determina l'offerta e lo sconto applicato
    document.getElementById('outputNome').textContent = nome;
    document.getElementById('outputTipoTariffa').textContent = tipoTariffa;
    document.getElementById('outputCarrozza').textContent = numeroCarrozza;
    document.getElementById('outputCodiceBiglietto').textContent = codiceBiglietto;
    document.getElementById('outputTariffa').textContent = tariffaFinale.toFixed(2);

    // Mostra il riepilogo del biglietto
    document.getElementById('biglietto').style.display = 'block';
}

// Funzione per annullare la prenotazione e ripristinare il form
function annullaPrenotazione() {
    // Nasconde il riepilogo del biglietto
    document.getElementById('biglietto').style.display = 'none';

    // Pulisce i campi del form
    document.getElementById('nome').value = '';
    document.getElementById('distanza').value = '';
    document.getElementById('eta').value = '';
}

