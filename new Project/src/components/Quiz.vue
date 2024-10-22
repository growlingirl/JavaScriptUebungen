<script setup>
import{  reactive,} from 'vue';

    const QandA = reactive([
    {question: 'In welchem Jahr wurde die Kiss gegründet?', answer: 2016, rangeStart: 1924, rangeEnd: 2024},
    {question: 'Von wievielen Gründungsmitgliedern wurde die Genossenschaft auf die Beine gestellt?', answer: 4, rangeStart: 0, rangeEnd: 10},
    {question: 'Wie viele Gemeinden des Kantons Zug haben eine KISS Genossenschaft?', answer: 4, rangeStart: 0, rangeEnd: 10},
    {question: 'In wievielen Kantonen gibt es KISS Genossenschaften?', answer: 7, rangeStart: 0, rangeEnd: 10},
    ])



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
        KISS - Begleitete Nachbarschaftshilfe <br>
        Gute Nachbarn von Jung bis Alt sind Gold wert. Bei uns GEBEN und NEHMEN die bald 300 Mitglieder untereinander auf einfache 
        und unbürokratische Art Unterstützung: beim Einkaufen, Gesellschaft leisten, Spazieren gehen, 
        im Haushalt etwas zur Hand gehen und vielem mehr. 
        Auch der Kontakt untereinander wird rege gepflegt. Die meisten unserer Mitglieder wohnen in der Stadt Zug. 
        Wir haben aber auch Genossenschafter aus den anderen Zuger Gemeinden, die meisten aus Baar.
        Die KISS Genossenschaft Zug wurde am 5. September 2016 gegründet. 
        Die Gründung geht auf eine Initiative von Susanna Fassbind, Heidi Lehner, Ingrid Spiess und Edith Stocker zurück. 
        Diese vier Frauen hatten zuvor bereits KISS Kanton Zug und den Verein KISS Schweiz (heute Fondation KISS) mit aufgebaut. 
        Verschiedene Quartiervereine unterstützten die Gründung von KISS Zug. Im Kanton Zug gibt es heute vier KISS Genossenschaften. 
        Neben der Stadt Zug sind dies Cham, Hünenberg und Risch. 
        KISS Genossenschaften und Vereine gibt es ausserdem in den Kantonen 
        Schwyz, Aargau, Glarus, St. Gallen, Zürich, Wallis und Basel-Landschaft. 
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
                    v-model="element.nb" 
                    @keydown.enter="check" 
                    :placeholder="' ' + element.rangeStart + ' - ' + element.rangeEnd" />
                    

                    <input class="mt-3"
                    type="range" 
                    :min="element.rangeStart" 
                    :max="element.rangeEnd" 
                    :value="50" 
                    :class="'S' + index " 
                    v-model="element.nb" /> 
            </div>      
            </li>
        </ul>

    </div>
</template>