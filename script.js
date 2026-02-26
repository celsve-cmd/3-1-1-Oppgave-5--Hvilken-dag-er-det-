/*Lag en funksjon som tar inn et parameter og som tar et tall 1–7 og returnerer:
6 eller 7 → "Det er helg!"
Ellers → "Det er en ukedag."*/


let dag = 0
let dagenEr = ''


updateView()
function updateView() {
    document.getElementById('helgeSjekk').innerHTML = /*HTML*/ `
    
    <div>Hva slags dag er det?</div>
    <br>
    <div>Mandag - Fredag: 1 - 5</div>
    <div>Lørdag og Søndag: 6 og 7</div>
    <br>
    Sjekk dag: <input onchange= "dagInput(this.value)">
    <button onclick= "submitDag()">Submit</button>
    <div>Det er: ${dagenEr}</div>
    `
}

function dagInput(verdi) {
    dag = Number(verdi)
}

function dagSjekk(typeDag) {
    if (typeDag <= 5) {
        return "Det er en ukedag."
    }
    else {
        return "Det er helg!"
    }
}

function submitDag() {
dagenEr = dagSjekk(dag)
updateView()
}