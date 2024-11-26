<script setup>
import{ ref, computed, onMounted} from 'vue';

const pw = ref();
const pw0 = ref(987654);
const count = ref(0);
const right = ref(false);
const titleId1 = ref('richtig')
const titleId2 = ref('falsch')
const emit = defineEmits(['changeString'])
const startTime = ref(0);
const stopTime = ref(0);
const logout = ref(false);

const time0 = ref(72000)
let T = null;

const timeChange = computed (() => {
    return stopTime.value - startTime.value;})

const Dif = computed (() => {
    return 3 - count.value;
})

const Versuch = computed(() => {
    return Dif.value > 0 ? ('noch ' + Dif.value + ' Versuche übrig.') : 'keine Versuche mehr.'; 
})
 
onMounted(() => {

    const savedCount = localStorage.getItem('count');
    if (savedCount !== null) {
        count.value = parseInt(savedCount, 10); //get number out of local storage (localstorage is always a string, therefore we have to parse it first into a number)
    }

    const savedTime = localStorage.getItem('startTime');
    if (savedTime !== null) {
        startTime.value = parseInt(savedTime, 10);  
    }

    const savedRight = localStorage.getItem('right');
    if (savedRight) {
        right.value = savedRight === 'true';
        timeCount();
    } 

})

function increment() {
    
    if ((pw.value == pw0.value && Dif.value > 0)) {
       right.value = true; 
       
    }

    if (right.value) {
         localStorage.setItem('right', right.value.toString());
        if (T === null) { // Start the timer only if it's not already running
            startTime.value = Date.now();
            localStorage.setItem('startTime', startTime.value.toString());
            logout.value = false;
            timer();
        }
    } 

    count.value++;
    localStorage.setItem('count', count.value); // store count in local storage
    pw.value = ''; //clear input field
}


function timer() {
    T = setInterval(timeCount,1000)
}

function timeCount () {
    
    stopTime.value = Date.now();
    
    if (timeChange.value > time0.value) {
            right.value = false;
            clearInterval(T);
            T = null;
            count.value = 0;
            stopTime.value = 0;
            localStorage.setItem('right', right.value.toString()); //update resetted values in localstorage
            localStorage.setItem('count', count.value.toString());
            logout.value = true;
            
        } 
}

function Logout() {
    right.value = false;
    clearInterval(T);
    T = null;
    count.value = 0;
    stopTime.value = 0;
    localStorage.setItem('right', right.value.toString()); 
    localStorage.setItem('count', count.value.toString());
}

</script>

<template>
    <div class="formContainer">

<form @submit.prevent>
    
    <label >Login: 
        <input type="password" id="pw" v-model="pw" @keydown.enter="increment"> 
        <span v-if="logout == true">"Du wurdest ausgeloggt."</span>
        <span v-if='right' :id="titleId1">eingeloggt</span>
        <span v-else :id="titleId2"> Du hast {{ Versuch }}</span>
        </label> <br>
    <button v-if="timeChange > 0 && timeChange < time0" @click="Logout()">Ausloggen</button>  

</form>  

</div>
</template>

<style>
    #richtig {
        color: green;
    }

    #falsch {
        color: red;
    }

    .formContainer {
        position: fixed;
        right: 20px;
        top: 20px;
        border: 1px white solid;
        border-radius: 5px;
        float: right;
        background-color: rgb(221, 221, 221);
    }

    button {
        float: right;
    }
</style>