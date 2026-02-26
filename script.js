/*Lag en funksjon som tar inn et parameter og som tar et tall 1–7 og returnerer:
6 eller 7 → "Det er helg!"
Ellers → "Det er en ukedag."*/


let dag = 0

updateView()
function updateView() {
    document.getElementById('helgeSjekk').innerHTML = /*HTML*/ `
    
    <div>Hva slags type dag er det?</div>
    <br>
    <div>Mandag - Fredag: 1 - 5</div>
    <div>Lørdag og Søndag: 6 og 7</div>
    <br>
    Sjekk dag: <input onchange= "dagInput(this.value)">
    <div>Det er: ${showMessage()}</div>
    `
}

function dagInput(verdi) {
    dag = Number(verdi)
    updateView()
    console.log (verdi)
}

function showMessage() {
    if (dag === 0){
        return ""
    }
    if (dag <= 5) {
        return "Det er en ukedag."
    }
    else {
        return "Det er helg!"
    }
}