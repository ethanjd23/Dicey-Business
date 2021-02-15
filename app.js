let diceContainer = document.getElementById('dice-container');
let diceGenerator = document.getElementById("btn-generator");
let diceRoller = document.getElementById("btn-roller");
let dieArray = [];

class Dice {
    constructor() {
        this.container = document.createElement('div');
        this.container.className = 'dice';
        diceContainer.appendChild(this.container);
    }
    
    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.container.textContent = this.value;
    }
}; 

diceGenerator.addEventListener("click", makeNewDice);    
diceRoller.addEventListener("click", rollDie);


function makeNewDice() {
    let newDice = new Dice();
    newDice.roll();
    dieArray.push(newDice);
};

function rollDie() {
    for(let item of dieArray) {
        item.roll();
    };
};