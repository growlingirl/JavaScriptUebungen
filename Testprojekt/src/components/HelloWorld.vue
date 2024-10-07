<script setup>
  
  import( ref) from 'vue';

  let x = ref(10);
  let string = ref("Hallo");



  const decrease = () => {
    x.value -=;
  }

  const increase = () => {
    x.value +=;
  }


</script>



<template>
  <div>
    <h1>Erde</h1>
    <button v-on:click = decrease>Update --</button>
    <h2>x / 2</h2>
    <button v-on:click ="increase">Ubdate ++</button>
  </div>
  <p> {{ string }}</p>
  <input type="test"> v-model='string'
</template>



