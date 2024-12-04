<script setup>
import{ onMounted, reactive, ref} from 'vue';
import { useTextareaAutosize} from "@vueuse/core"

const QandA = ref([]);

const New = ref(false)
const change = ref(false)
const textE = ref(false)

function textInput() {

}

function safeQandA() {

}

const { textarea, input } = useTextareaAutosize()

</script>

<template>
    
    <div class="float-left pl-3">
        <br> <br> <br>
        <p>Möchten Sie ein neues Quiz erstellen oder ein bereits erstelltes anpassen?</p>
        <button @click="New=!New" >Neu erstellen</button> 
        <button @click="change=!change">Anpassen</button>
        
<!--quiz erstellen-->  
    <div  v-if="New">  <!--v-if="New" ist das gleiche wie v-if="New == true"--> 
        <h3  class="text-3xl font-bold px-8 pt-8 font-serif">Neues Quiz kreieren</h3>
        <br>

        <p>1. Geben Sie hier ihren Text fürs Textverständnis ein:</p> <br>
        
            <textarea 
            ref="textarea"
            v-model="input" 
            placeholder="add multiple lines " 
            class="resize-none  w-full border-1 border-grey-500 ">
            </textarea>  
        
	    
        <br>
        <button  onclick="textInput()">Text speichern</button>
        <br>

        <p v-if="textE">{{ Text }}</p>
        <p v-if="textE">Das Textverständnis hat die Quiz-Nummer <span class="bold"></span></p> <br><br>

        <p  >2. Geben Sie hier Ihre Frage ein:</p> <br>

        <input   v-model="Frage" placeholder="Frage" /> <br>
        <input   v-model="Antwort" placeholder="Antwort" /> <br>
        <input   v-model="rangeStart" placeholder="Anfang Zahlenbereich" /> <br>
        <input   v-model="rangeEnd" placeholder="Ende Zahlenbereich" /> 

        <button   onclick="safeQandA()">Frage speichern</button> <br> <br> <br>
         

        <ul>
            <li v-for="(element, index) in QandA" :key="index" 
            class="font-serif text-base py-3">

            </li>


        </ul>
        <p>Frage: <span> {{ Frage }}</span></p>
        <p>Antwort: <span> {{ Frage }}</span></p>
        <p>Anfang Zahlenbereich: <span> {{ Frage }}</span></p>
        <p>Ende Zahlenbereich: <span> {{ Frage }}</span></p>


        <button>eine weitere Frage erstellen</button>
    </div>

<!--quiz bearbeiten-->

     <div v-if="change">
        <h3  class="text-3xl font-bold px-8 pt-8 font-serif">Vorhandenes Quiz anpassen</h3>
        <p >Wählen Sie welches Quiz Sie bearbeiten möchten</p>

     </div>
        


    </div>
</template>

<style scoped>
textarea {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

textarea::-webkit-scrollbar {
  display: none;
}
</style>
   
