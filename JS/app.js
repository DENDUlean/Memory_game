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