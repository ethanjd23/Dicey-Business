let diceContainer = document.getElementById("dice-container");
let diceGenerator = document.getElementById("btn-generator");
let diceRoller = document.getElementById("btn-roller");
let dieArray = [];

class Dice {
  constructor() {
    this.container = document.createElement("div");
    this.container.className = "dice";
    diceContainer.appendChild(this.container);
  }

  roll() {
    this.value = Math.floor(Math.random() * 6) + 1;
    if (this.value == 1) {
      let img = document.createElement("img");
      img.src = "/1.png";
      this.container.appendChild(img);
        this.img = img;
    } else if (this.value == 2) {
      let img = document.createElement("img");
      img.src = "/2.png";
      this.container.appendChild(img);
        this.img = img;
    } else if (this.value == 3) {
      let img = document.createElement("img");
      img.src = "/3.png";
      this.container.appendChild(img);
        this.img = img;
    } else if (this.value == 4) {
      let img = document.createElement("img");
      img.src = "/4.png";
      this.container.appendChild(img);
        this.img = img;
    } else if (this.value == 5) {
      let img = document.createElement("img");
      img.src = "/5.png";
      this.container.appendChild(img);
        this.img = img;
    } else {
      let img = document.createElement("img");
      img.src = "/6.png";
      this.container.appendChild(img);
        this.img = img;
    }
  }
}

diceGenerator.addEventListener("click", makeNewDice);
diceRoller.addEventListener("click", rollDieAgain);

function makeNewDice() {
  let newDice = new Dice();
  newDice.roll();
  dieArray.push(newDice);
}

function rollDieAgain() {
    dieArray.forEach((val, i) => {
        let reRoll = val.roll();
        val[i] = reRoll;
        console.log(val);
    })

//   for (let item of dieArray) {
//     console.log(item); 
//     item.img = null;
//     item.roll();
//   }
}
