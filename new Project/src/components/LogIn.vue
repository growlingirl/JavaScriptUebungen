<script setup>
import{ ref, computed} from 'vue';
import App from '../App.vue'

const pw = ref();
const pw0 = ref(987654);
const count = ref(0);
const right = ref(false);
const titleId1 = ref('richtig')
const titleId2 = ref('falsch')
const Zustand = ref();

const Dif = computed (() => {
    return 3 - count.value
})

right.value 
    ? Zustand.value = 'you are logged in' 
    : Zustand.value = 'you are NOT logged in';

function increment() {
    if (pw.value == pw0.value && Dif.value > 0) {
       right.value = !right.value; } 
    
    count.value++;

}

const Versuch = computed(() => {
    return Dif.value > 0 ? ('noch ' + Dif.value + ' Versuche übrig.') : 'keine Versuche mehr.'; 
})

</script>

<template>
    <div>
<h1>Passworteingabe</h1>

<form @submit.prevent>
        <label for="pw">bitte gib das korrekte Passwort ein</label> <br>

        <input type="password" id="pw" v-model="pw"> <br> <br>
    
    <button @:click = 'increment' > Du hast {{ Versuch }} </button>
</form>

    <h2 v-if='right' :id="titleId1">BERECHTIGT</h2>
    <h2 v-else :id="titleId2">Du bist nicht berechtigt.</h2>

    <App v-if ='right'></App>
    <App v-if ='!right'></App>

</div>
</template>

<style>
    #richtig {
        color: green;
    }

    #falsch {
        color: red;
        
    }

    button {
        border: 1px black solid;
        box-shadow: 1px 2px 5px #000000;
    }

</style>