<script setup>
  
  import{ ref, reactive, computed, watch} from 'vue';

  const x = ref(10);
  const string = ref("Hallo");
  const num = ref(5);
  const state = reactive({
    count:15, name: "Jenny",
  });


  const decrease = (value) => {
    x.value -= value ;
  }

  const increase = (value) => {
    x.value += value ;
  }

  const comp = computed(() => {
    if (x.value > 10) {
      return "Larger";
    } else {
      return "smaller";
    }
  })

  watch ( () => state.count, (newValue, oldValue) => {
    console.log(newValue, oldValue);
  })

  const todos = [
    { desc: 'Programmieren', done: false},
    { desc: 'Kochen', done: false},
    { desc: 'Wischen', done: true}  ]
</script>



<template>

  <div>
    <h1>Erde</h1>
    <button @:click ='decrease(num)'>Update --</button>
    <h2>{{x}}</h2>
    <button @:click ='increase(num)'>Update ++</button>

    <p> {{ string }}</p>
  <input type="text" v-model='string'> 
  <input type="number" v-model=num>

  <p>{{ state.name }}</p>

  <h2>{{ comp }}</h2>

  <hr/>

  <div v-for= '(item, index) in todos' :key='item.desc'>
    <p :class= '{open: !item.done, done: item.done}'>{{index + 1 }} : {{ item.desc }}</p>
  </div>
  


  </div>

</template>

<style>
  .open {
    background-color: darkred;
    color: white;
  }

  .done {
    background-color: darkgreen;
    color: white;
  }

  button {
    position: static;
  }
</style>