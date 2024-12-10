<script setup>
import{ ref, onMounted} from 'vue';
import { useTextareaAutosize} from "@vueuse/core"

//Defining variables
const QandA = ref([]);
const Text = ref([]);
const New = ref(false);
const change = ref(false);
const textE = ref(false);

const textTitle = ref('');
const question = ref('');
const answer = ref('');
const rangeStart = ref();
const rangeEnd = ref();
const quizNumber = ref();

//GET Method
async function fetchData() {
  const fetcher = await fetch("http://localhost:3000/quiz");
    return await fetcher.json();
}
   
onMounted(async () => {
    
    const variable = await fetchData();
    console.log(variable)
    TextandQ.value = variable.data;

})

//POST Method
async function postData() {
    const url = "http://localhost:3000/quiz";
    try {
     const response = await fetch(url, {
        method: "POST",
      body: JSON.stringify({ quiz_text: input.value, title: textTitle.value }),
    });  
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`); 
    }

    const json = await response.json();
    console.log(json)
    } catch (error) {
        console.error(error.message);
    }
}



//functions
function newText() {
New.value = true;
change.value = false;
textE.value = false;
input.value = '';
textTitle.value = '';
}

function alterQuiz() {
    quizNumber = '';
    change.value = true;
    New.value = false;
}

function textInput() {
    textE.value=!textE.value;
    postData();
}

function safeQandA() {

}
//automatically resize Textinput field
const { textarea, input } = useTextareaAutosize()

</script>

<template>
    
    <div class="float-left pl-3">
        <br> <br> <br>
        <p class="my-4">Möchten Sie ein neues Quiz erstellen oder ein bereits erstelltes anpassen?</p>
        <button @click="newText()" class="ml-20 bg-green-400 hover hover:bg-green-500 duration-300 font-sm text-white rounded py-1.5 px-4" >
            Neu erstellen</button> 
        <button @click="alterQuiz()" class="bg-green-400 hover hover:bg-green-500 duration-300 font-sm text-white rounded py-1.5 px-4">
            Anpassen</button>
        

<!--quiz erstellen-->  
    <div  v-if="New">  <!--v-if="New" ist das gleiche wie v-if="New == true"--> 
        <h3  class="text-3xl font-bold px-8 mt-20 py-4 font-serif">
            Neues Quiz kreieren</h3>
        <br>

        <p v-if="textE==false">1. Geben Sie hier Ihren Text fürs Textverständnis ein:</p> <br>
        <textarea v-if="textE==false" 
            v-model="textTitle" 
            ref="textarea"
            placeholder="Geben Sie hier den Titel ein. " 
            class="my-8 resize-none  w-full border-1 border-grey-500 ">
            </textarea>  
        <!--textarea wird nach text speichern verborgen-->  
            <textarea v-if="textE==false" 
            ref="textarea"
            v-model="input" 
            placeholder="Geben Sie hier den Text ein. " 
            class="my-8 resize-none  w-full border-1 border-grey-500 ">
            </textarea>  
        
        <br>
        <button  @click="textInput()" v-if="textE==false" class="bg-green-400 hover hover:bg-green-500 duration-300 font-sm text-white rounded py-1.5 px-4">
            Text speichern</button>
        <br>

        <p v-if="textE">{{ textTitle }}</p>
        <p v-if="textE">{{ input }}</p>
        <p v-if="textE" class="mt-6">
            Das Textverständnis hat die Quiz-Nummer <span class="bold"></span></p> <br><br>

        <p  >2. Geben Sie hier eine Frage ein:</p> <br>

        <input   v-model="question" placeholder="Frage" /> <br>
        <input   v-model="answer" placeholder="Antwort" /> <br>
        <input   v-model="rangeStart" placeholder="Anfang Zahlenbereich" /> <br>
        <input   v-model="rangeEnd" placeholder="Ende Zahlenbereich" /> 

        <button   onclick="safeQandA()" class="bg-green-400 hover hover:bg-green-500 duration-300 font-sm text-white rounded py-1.5 px-4">
            Frage speichern</button> <br> <br> <br>
         

     

        <p>Frage: <span> {{ question }} </span></p>
        <p>Antwort: <span> {{ answer }} </span></p>
        <p>Anfang Zahlenbereich: <span> {{ rangeStart }} </span></p>
        <p>Ende Zahlenbereich: <span> {{ rangeEnd }} </span></p>


        <button class="bg-green-400 hover hover:bg-green-500 duration-300 font-sm text-white rounded py-1.5 px-4">
            eine weitere Frage erstellen</button>
    </div>

<!--quiz bearbeiten-->

     <div v-if="change">
        <h3  class="text-3xl font-bold px-8 pt-8 font-serif">
            Vorhandenes Quiz anpassen</h3>

        <p>Die folgenden Quiz gibt es:</p>
        <ul>            
            <li v-for="(element, index) in quizText" :key="index" 
                class="font-serif text-base py-3">               
            <div class="bg-slate-200 block">
                <span class='text-sky-600'> {{ index + 1 }}. </span>
                <span>  {{dependence_id}}  </span>
                <span>  {{element.title}} </span> <br> <br>
                <span>  {{element.quizT}} </span>
            </div>  
            <input   v-model="quizNumber" placeholder="Quiz Nummer" />
            </li>
        </ul>

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
   
