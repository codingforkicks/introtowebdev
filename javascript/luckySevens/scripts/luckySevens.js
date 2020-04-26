// Function's purpose - clear previous contents
// Input: none
// Output: none

function clearResults() {
   document.getElementById("bank").innerText = "$0.00";
};

// Purpose: check if number
// Input: bet
// Output: T/F
function isNumber(bet){
   if (bet == "" || isNaN(bet) || Number(bet) <= 0){
      alert("Bet must be a positive number greater than 0.");
      document.getElementById("bank")
         .parentElement.className = "row has-error"
      document.getElementById("bank").focus();
      return false;
   };
   return true;
};

// format number 1000000 to 1,234,567
function formatNumber(n) {
   return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

// appends $ to value, validates decimal side
function formatCurrency(input) {
   // get input value
   let input_val = input;
   // don't validate empty input
   if (input_val === "") { return; }
   // check for decimal
   if (input_val.indexOf(".") >= 0) {
      // get position of first decimal
      // this prevents multiple decimals from
      // being entered
      let decimal_pos = input_val.indexOf(".");

      // split number by decimal point
      let left_side = input_val.substring(0, decimal_pos);
      let right_side = input_val.substring(decimal_pos);

      // add commas to left side of number
      left_side = formatNumber(left_side);

      // validate right side
      right_side = formatNumber(right_side);
      
      // Make sure 2 numbers after decimal
      if (right_side.length == 0) {
         right_side += "00";
      } else if (right_side.length == 1){
         right_side += "0";
      } else {
         right_side = right_side.substring(0, 2);
      };

      // join number by .
      input_val = "$" + left_side + "." + right_side;

   } else {
      // no decimal entered
      // add commas to number
      // remove all non-digits
      input_val = formatNumber(input_val);
      input_val = "$" + input_val + ".00";
   }
   
   // send updated string to input
   return input_val;
};

// Purpose: get bet amount from user
// Input: none
// Output: none
function getBet() {
   bet = prompt("How much would you like to bet?");
   while (!isNumber(bet)){
      bet = prompt("How much would you like to bet?");
   };
   let betString = bet.toString();
   bet = formatCurrency(betString)
   document.getElementById("bank").innerText = bet;
};

function add(x, y){
   return Number(x) + Number(y);
};

function rollDice(numSides) {
   let dice1 = Math.floor(Math.random() * numSides) + 1;
   let dice2 = Math.floor(Math.random() * numSides) + 1;
   if(add(dice1, dice2) == 7){
      return true;
   }
   return false;
};

// display stats when game over;
function displayStats(starting, totalRolls, highestWon, rollCountAtHighest) {
   document.getElementById("startingBet").innerText = formatCurrency(starting.toString());
   document.getElementById("numOfRolls").innerText = totalRolls;
   document.getElementById("highestWon").innerText = formatCurrency(highestWon.toString());
   document.getElementById("rollCountAtHighest").innerText = rollCountAtHighest;
   document.getElementById("results").style.display = "block";
};

// game play on button click
function playGame() {
   //grab starting bank from dom and convert to number
   let startingBank = document.getElementById("bank").innerText;
   startingBank = Number(startingBank.slice(1, startingBank.length));
   
   //values to track table data
   let currentBank = startingBank;
   let numOfRolls = 0;
   let rollCountAtHighest = 0;
   let highestWinnings = 0;

   while((numOfRolls < 50) && (currentBank > 0)){
      if(currentBank < 0){
         break;
      }
      if(rollDice(6)){
         currentBank += 7.0;
      } else{
         currentBank -= 1.0;
      }
      if (currentBank > highestWinnings) {
         highestWinnings = currentBank;
         rollCountAtHighest = numOfRolls;
      }
      numOfRolls++;
   }
   document.getElementById("bank").innerText = "$0.00";
   displayStats(startingBank, numOfRolls, highestWinnings, rollCountAtHighest);
};