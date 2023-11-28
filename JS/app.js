// základní proměnné
const gridContainer = document.querySelector('.grid-container');
const listOfColors = ['blue', 'red', 'yellow', 'purple', 'gold', 'brown', 'aqua', 'teal'];
// zde tovřími kopi pole tak aby byla každá barva 2x (protože hledáme dvě shodné)
const colorsPickList = [...listOfColors, ...listOfColors];
const gridCount = colorsPickList.length;

// Status naší hry
// nastavuje nám kolik budeme mít zobrazených karet
let revealedCount = 0;
let activeGrid = null;
/*
     Tato mocnina referuje k malému oknu mezi tahy hráčů
        Jinými slovy čekáme než se špatný tah hráče opět otocí na původní pozici
*/
let awaitingEndOfMove = false;

// tvoření funkce pro vytvoření naše dlaždice
function buildSingleGrid(color){
    // vytváříme div ve proměnné
    const element = document.createElement('div');
    // přidáváme vytvořenému divu classu pomocí add() metodě
    element.classList.add('single-grid');
    // nastavujeme vytvořennému elementu atribut s náhodnou barvu
    element.setAttribute("data-color", color);
    // díky tomuhle docílíme 
    element.setAttribute("data-revealed", "false");
    
    // tvorba listeneru na klik, 
    element.addEventListener('click', () => {
        if(awaitingEndOfMove){
            return;
        }

        // upravujeme styl dlaždice
        element.style.backgroundColor = color;

        // kontroluje zda není aktivní dlaždice
        if(!activeGrid){

            // pokud není rovná se vytvořenému elementu
            // active referuje ke kliklé dlaždici
            activeGrid = element;
            
            return;
        }

        // sekce pro kontrolu zda se barva shoduje
        const matchingColor = activeGrid.getAttribute("data-color");

        // zde prvně kontrolujeme pokud se barvy shodují
        if(matchingColor === color){

            // pokud ano, čistíme stav hry
            awaitingEndOfMove = false;
            activeGrid = null;
            revealedCount += 2;

            // zde kontrolujeme jestli hráč dohrál hru a vyhrál
            if(revealedCount === gridCount){
                alert('You win! This is a end of game.');
            }

            return;
        }

        // zamezuje kliknout na další dlaždice
        awaitingEndOfMove = true;

        // díky tomuhle se karta vrací do původiní pozice a čistí se proměnné ať můžeme provést další tah
        setTimeout( () =>{
            element.style.background = null;
            activeGrid.style.background = null;

            awaitingEndOfMove = false;
            activeGrid = null;

        }, 1000);

    });

    return element;
}

// Logika pro vybíraní náhodných barev
for(let i = 0; i < gridCount; i++){
    // zde vytváříme generátor náhodné barvy podle délky našeho pole barev
    const randomIndex = Math.floor(Math.random() *colorsPickList.length);
    // zde ukládáme barvu na náhodnem indexu, který byl vygenerován výšše
    const color = colorsPickList[randomIndex];
    // vytváříme dlaždici s barvou
    const grid = buildSingleGrid(color);
    // odstraňujeme barvu z pole
    colorsPickList.splice(randomIndex, 1);
    // připojujeme nově vytvořennou dlaždici do grid containeru 
    gridContainer.appendChild(grid);
}