<script setup>
import{  reactive,} from 'vue';

    const QandA = reactive([
    {question: 'In welchem Jahr wurde die Kiss gegründet?', answer: 2016, range: '1924 - 2024'},
    {question: 'Von wievielen Gründungsmitgliedern wurde die Genossenschaft auf die Beine gestellt?', answer: 4, range: '0 - 10'},
    {question: 'Wie viele Gemeinden des Kantons Zug haben eine KISS Genossenschaft?', answer: 4, range: '0 - 10'},
    {question: 'In wievielen Kantonen gibt es KISS Genossenschaften?', answer: 7, range: '0 - 10'},
    ])



</script>
<template>
    <div class="float-left ...">
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
            <li v-for="(value, index) in QandA" >
            <table>
                <tbody>
            <tr class="bg-slate-200 block">
                <td class='text-sky-600'> {{ index + 1 }}. </td>
                <td> &nbsp  {{value.question}} </td>
             </tr> 
             <tr class="">
                <td> &nbsp </td>
                <td><input type="number" v-model="nb" @keydown.enter="check" :placeholder="value.range"></td>
            </tr>
        </tbody>
        </table>
            </li>
        </ul>

    </div>
</template>