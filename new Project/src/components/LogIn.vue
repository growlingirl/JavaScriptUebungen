<script setup>
import{ ref, computed, onMounted} from 'vue';

const pw = ref();
const pw0 = ref(987654);
const count = ref(0);
const right = ref(false);
const titleId1 = ref('richtig')
const titleId2 = ref('falsch')
const emit = defineEmits(['changeString'])


onMounted(() => {
    const savedCount = localStorage.getItem('count');
    if (savedCount !== null) {
        count.value = parseInt(savedCount, 10) //get number out of local storage (localstorage is always a string, therefore we have to parse it first into a number)
    }

    const savedRight = localStorage.getItem('right');
    if (savedRight !== false) {
        right.value = savedRight //get boolean out of local storage
    }
})

const Dif = computed (() => {
    return 3 - count.value;
})
 
function increment() {
    
    if ((pw.value == pw0.value && Dif.value > 0) || right.value ) {
       right.value = !right.value; 
       localStorage.setItem('right', right.value);
        } 

    count.value++;
    localStorage.setItem('count', count.value); // store count in local storage
    pw.value = ''; //clear input field
}

const Versuch = computed(() => {
    return Dif.value > 0 ? ('noch ' + Dif.value + ' Versuche übrig.') : 'keine Versuche mehr.'; 
})

</script>

<template>
    <div class="formContainer">

<form @submit.prevent>
    
        <label >Login: 
            <input type="password" id="pw" v-model="pw" @keydown.enter="increment"> 
            <span v-if='right' :id="titleId1">eingeloggt</span>
            <span v-else :id="titleId2"> Du hast {{ Versuch }}</span>
            </label> 

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
        border: 1px black solid;
        border-radius: 5px;
        float: right;
    }
</style>