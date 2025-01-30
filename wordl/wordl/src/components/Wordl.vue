<style scoped>


@media screen and (orientation: landscape) {
.grid-site {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto;
    padding: 0px;
    gap: 0px;
  }
  
.grid-nav {
    background-color: rgb(103, 204, 165);
    grid-area: 2 / 1 / 9 / 3;
    margin: 0; padding: 0;}

.grid-nav1 {
    background-color: rgb(103, 204, 165);
    position: fixed;
    grid-column-start: 1;
    grid-column-end: 2;}
}

.grid-head {
    grid-column-start: 1;
    grid-column-end: last-line;
    z-index: 1;
  }

.i1,
  .i2,
  .i3,
  .i4,
  .i5,
  .i6,
  .i7 ,
  .i8 {
    display: grid;
     grid-column-start: 3;
    grid-column-end: last-line;}
  
    @media  screen and ( orientation: portrait ) {
      .i1 {grid-area: 3 / 1 / 4 / 13;  }
  .i2 {grid-area: 4 / 1 / 5 / 13;}
  .i3 {grid-area: 5 / 1 / 6 / 13;}
  .i4 {grid-area: 6 / 1 / 7 / 13;}
  .i5 {grid-area: 7 / 1 / 8 / 13;}
  .i6 {grid-area: 8 / 1 / 9 / 13;}
  .i7 {grid-area: 9 / 1 / 10 / 13;}
  .i8 {grid-area: 10 / 1 / 11 / 13;}
    }

.button {
font-size: 20px;
float: left;
margin-left: 10px;
}

.f {
  border: 2px solid rgb(103, 204, 165);
  margin: 3px;
  background-color: lightgray;
  
  aspect-ratio: 1 / 1; /* Ensure each square has equal height and width */
  width: 300%; /* Set width to take up the full available space */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4em;
  box-sizing: border-box; /* Ensure padding and borders are included in the element's total width and height */
  }

.row {
  margin: 3px;
  aspect-ratio: 6 / 1; /* Ensure each square has equal height and width */
  width: 100%; 
  display: flex;
  align-items: center;
  justify-content: center;
  
  box-sizing: border-box; /* Ensure padding and borders are included in the element's total width and height */

}

#gridContainer {
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr ;
  
}

.inputField {
  width: 100%; 
  height: 100%;
  font-size: inherit;
  border: none;
  background-color: lightgrey;
  text-transform: uppercase;
  text-align: center;
  color: black;
}

#game{
  aspect-ratio: 1 / 1;
  height: 80vh;
}

.button {
  border: black 1pt solid;
  margin: 3pt;
  padding: 3pt;
}

button:hover {
  background-color: lightblue;
}
</style>

<script setup>
import { nextTick, ref, onMounted } from 'vue';
//responsives Design
//Message gewonnen grösser
//Message innerhalb von viewing window
//Navbar einfügen
//

const gameOver = ref(false);
const message = ref('');

const fields = ref(Array.from({ length: 6 }, () => ['', '', '', '', '', ''])); // Create a 6x6 grid
const currentRow = ref(0);

const words = ['AARGAU', 'BIENEN', 'CHANCE', 'DRAMEN', 'FALTEN', 'GRIFFE', 'HAUFEN', 'INSELN', 'JUNGEN', 'KOFFER', 'LACHEN', 'MUTTER', 'NEHMEN', 'ONLINE', 'PINSEL', 'QUOTEN', 'OPIATE', 'STANGE', 'TASTEN', 'UNIKAT', 'VOKALE', 'WARTEN', 'ZEBRAS' ];
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];



//choose random word
const solution = ref(words[Math.floor(Math.random() * words.length)]);
   
console.log(solution);

// after loading page change focus to first input field 
onMounted(()=>{
  const firstInput = document.querySelector(`[data-row="0"][data-col="0"]`);
  if (firstInput) firstInput.focus();
})

//Method to disable specific rows
const isRowEnabled = (rowIndex) => {
  // Enable only the first row (m = 1)
  return rowIndex === currentRow.value;
};


// Check guess and give feedback
const checkGuess = () => {
  if (gameOver.value) return;//stop function if game is already over
  
  
  //compare
  const guess = fields.value[currentRow.value].join('').toUpperCase();
console.log(guess)
 
  if (!words.includes(guess)) {
    message.value = "Falsches Wort!";
    if(currentRow.value==5) {
      gameOver.value = true;
    message.value = `❌ Game over! Das richtige Wort ist ${solution.value}`
    
    }
    return;
  }

  // Check win condition
  if (guess.toUpperCase() === solution.value.toUpperCase()) {
    gameOver.value = true;
    message.value = "Gewonnen!";
    return;
  }

  
};


// Method to jump to the next input or previous field
    const jumpToNext = (rowIndex, colIndex) => {
      // Check if the current input is full
      const value = fields.value[rowIndex][colIndex];
      if (value.length === 1) {
         // Move focus to the next input field if it exists
        const nextInput = document.querySelector(
          `[data-row="${rowIndex}"][data-col="${colIndex + 1}"]`);
      if (nextInput) nextInput.focus();
      }
    };

// Backspace for returning to the previous input
  const handleBackspace = (rowIndex, colIndex) => {
    if (fields.value[rowIndex][colIndex] === '' && colIndex > 0) {
    const prevInput = document.querySelector(
      `[data-row="${rowIndex}"][data-col="${colIndex - 1}"]`
    );
    if (prevInput) prevInput.focus();
  }
};


    //Enter key
    const handleEnter = async (rowIndex) => {

    if (fields.value[rowIndex].some(field=>field==='')) return;

      checkGuess();   

  if (rowIndex === fields.value.length - 1) {
    currentRow.value=null;
    return;
  }; 

  // Move to the next row
  currentRow.value = rowIndex + 1;
  await nextTick()

  // Focus on the first field of the next row
  const firstInputNextRow = document.querySelector(
    `[data-row="${rowIndex + 1}"][data-col="0"]`);
  if (firstInputNextRow) firstInputNextRow.focus();
};

const getLetterColor = (rowIndex,colIndex) => {
  if(rowIndex >= currentRow.value) return 'lightgrey';//if the current row (rowIndex) is equal to or greater than currentRow.value (active row) cells stay light grey.

const letterinput = fields.value[rowIndex][colIndex].toUpperCase();  
const correctLetter = solution.value[colIndex].toUpperCase();

  if (letterinput === correctLetter.toUpperCase()) return 'green'; //correct
  if (solution.value.toUpperCase().includes(letterinput)) return 'orange'; //wrong place
  return 'gray'; //wrong
};

function reload() {
  window.location.reload()
}
</script>


<template>
<body>
  <div class="grid-site">

    <div class="grid-head">
    <h1>Wordle</h1>
      <p>Finde das richtige Wort.<br>
       <span style="color: green;">Grüne Buchstaben</span>  befinden sich am richtigen Ort,<br>
       <span style="color: orange;">orange Buchstaben</span> kommen im Wort vor, sind aber nicht am richtigen Platz und <br>
       <span style="color: grey;"> dunkelgraue Buchstaben</span> kommen nicht im Wort vor. </p>
    <p v-if="message">{{ message }}</p>
    </div>

    <div class="i1">


       
    <div id="game">    
      <div class="gridContainer">
       
            <div class="row" v-for="(row, rowIndex) in fields" :key="rowIndex">

              <div class="f" v-for="(field, colIndex) in row" :key="colIndex">
          <input
            type="text"
            maxlength="1"
            v-model="fields[rowIndex][colIndex]"
            class="inputField"
            @input="jumpToNext(rowIndex, colIndex)"
            @keydown.backspace="handleBackspace(rowIndex, colIndex)"
            @keydown.enter="handleEnter(rowIndex)" 
            :data-row="rowIndex"
            :data-col="colIndex"
            :disabled="!isRowEnabled(rowIndex)"
            :style="{ backgroundColor: getLetterColor(rowIndex, colIndex) }"
          />
              </div>
            </div>  

      </div>

      <!--<div v-for="letter in letters" :key="letter">
        <button
        type="button"  
        class="button"  
                 
        >{{letter}}</button>
      </div>-->

      <button v-if="gameOver" @click="reload()">Restart</button>

    </div>   
    </div>   
  </div>
</body>
</template>

