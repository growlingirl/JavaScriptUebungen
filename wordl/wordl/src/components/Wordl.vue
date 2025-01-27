<style scoped>
/*@import './assets/style.css';*/

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

.field {
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
}


#game{
  aspect-ratio: 1 / 1;
  height: 80vh;
}
</style>



<script setup>
import { ref } from 'vue';

const New = ref(true);


defineProps({
  msg: String,
})

const count = ref(0)
</script>


<template>
<body>
  <div class="grid-site">

    <div class="grid-head">
    <h1>Wordle</h1>
    </div>

    <div class="i1">


        <button v-if="New==true" @click="start()">Spiel neu starten</button> 

    <div id="game">    
      <div class="gridContainer">
       
            <div class="row" v-for="m in 6" :key="m" > 
              <div class="field" v-for="(field, n) in fields" :key="n">
                <input
                 type="text" 
                 maxlength="1" 
                 v-model="fields[n]"
                 class="inputField" 
                 :id="'f'+m+n" 
                 @input="jumpToNext(n)"
                 :ref="'field' + n"
                 >
              </div>
            </div>  

      </div>
    </div>   
    










    










  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Learn more about IDE Support for Vue in the
    <a
      href="https://vuejs.org/guide/scaling-up/tooling.html#ide-support"
      target="_blank"
      >Vue Docs Scaling up Guide</a
    >.
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
  </div>
    
  </div>
</body>
</template>

