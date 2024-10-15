<script setup>
import{  reactive,} from 'vue';

    const QandA = reactive({
    2016: 'In welchem Jahr wurde die Kiss gegründet?',
    4: 'Von wievielen Gründungsmitgliedern wurde die Genossenschaft auf die Beine gestellt?',
    4: 'Wie viele Gemeinden des Kantons Zug haben eine KISS Genossenschaft?',
    7: 'In wievielen Kantonen gibt es KISS Genossenschaften?'
    })



</script>
<template>
    <div>
        <h3>Textverständnis zur KISS</h3>
        <h4>Text:</h4>
        <p>
        KISS - Begleitete Nachbarschaftshilfe
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

        <h4>Fragen</h4>

        <ul>
            <li v-for="(value) in QandA" class='bg-slate-50 marker:text-sky-400'>
            {{ index }}. {{ value }} <br>
            <input type="number" v-model="nb" @keydown.enter="check">
            </li>
        </ul>

    </div>
</template>