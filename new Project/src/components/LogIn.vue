<script setup>
import{ ref, computed} from 'vue';

const pw = ref();
const pw0 = ref(987654);
const count = ref(0);
const right = ref(false);
const titleId1 = ref('richtig')
const titleId2 = ref('falsch')

const Dif = computed (() => {
    return 4 - count.value
})

//const Try = computed (() => {
 //   return Dif - 1
//})

function increment() {
    count.value++;

    if (pw.value == pw0.value && Dif > 0) {
       right.value = !right.value; } 
}

const Versuch = computed(() => {
    return Dif.value > 1 ? ('noch ' + Dif.value + ' Versuche übrig.') : 'keine Versuche mehr.'; 
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