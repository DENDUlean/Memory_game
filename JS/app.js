// základní proměnné
const gridContainer = document.querySelector('.grid-container');
const listOfColors = ['blue', 'red', 'yellow', 'purple', 'gold', 'brown', 'aqua', 'teal'];
const colorsPickList = [...listOfColors, ...listOfColors];
const gridCount = colorsPickList.length;

// Status naší hry
// nastavuje nám kolik budeme mít zobrazených karet
let revealedCount = 0;
let activeGrid = null;
let awaitingEndOfMove = false;

// tvoření funkce pro vytvoření naše dlaždice
function buildSingleGrid(color){
    const element = document.createElement('div');
}

// Logika pro vybíraní náhodných barev
for(let i = 0; i < gridCount; i++){
    // zde vytváříme generátor náhodné barvy podle délky našeho pole barev
    const randomIndex = Math.floor(Math.random() *colorsPickList.length);
    // zde ukládáme barvu na náhodnem indexu, který byl vygenerován výšše
    const color = colorsPickList[randomIndex];
    // odstraňujeme barvu z pole
    colorsPickList.splice(randomIndex, 1);
}