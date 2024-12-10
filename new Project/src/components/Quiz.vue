<script setup>
import{  onMounted, ref} from 'vue';

const QandA = ref([])

async function fetchData() {
  const fetcher = await fetch("http://localhost:3000/quiz");
    return await fetcher.json();
}
   
onMounted(async () => {
    
    const variable = await fetchData();
    console.log(variable)
    TextandQ.value = variable.data;

})




</script>
<template>
    <div class="float-left pl-3">
        <br>
        <h3 class="text-3xl font-bold px-8 pt-8 font-serif">Textverständnis: KISS</h3>
        <br>
        <h4 class="font-bold underline text-lg pb-4 pl-4">Text:</h4>

        <p class="first-line:uppercase first-line:tracking-widest
            first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
            first-letter:mr-3 
            font-serif text-base">
        {{ quizT }}
        </p> <br>

        <h4 class="font-bold underline text-lg pb-4 pl-4">Fragen:</h4>

        <ul>            
            <li v-for="(element, index) in QandA" :key="index" 
                class="font-serif text-base py-3">               
            <div class="bg-slate-200 block">
                <span class='text-sky-600'> {{ index + 1 }}. </span>
                <span> &nbsp;  {{element.question}} </span>
                
            </div>  
            <div>
                <input class="w-20 ml-5 mr-10"
                    type="number" 
                    v-model.number="element.nb" 
                    @keydown.enter="check"
                    :class="{'text-green-500 font-bold': Number(element.nb) == Number(element.answer)}" 
                    :placeholder="' ' + element.range_start + ' - ' + element.range_end" />
                    

                    <input 
                    class="mt-3"
                    type="range" 
                    :min="element.range_start" 
                    :max="element.range_end" 
                    :value="50" 
                     
                    v-model.number="element.nb" /> 
            </div>    
            
            <!--Debugging
            <div class="text-xs mt-1 ml-5">
                <span>nb: {{ element.nb }} | answer: {{ element.answer }} </span>
            </div>
            -->

      
            </li>
        </ul>

    </div>
</template>