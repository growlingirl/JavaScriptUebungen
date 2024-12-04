<script setup>

import Login from './components/LogIn.vue'
import Nav from './components/Nav.vue'


const changeIt = (data) => {
    state.value = data;}

const navi = (data) => {
  state.value = data;}

</script>

<template>
  <div>
  
    <div>

      <Nav :name = 'state' @navigation="navi"/>

      <Login :name = 'state' @changeString="changeIt"/>
      <h2>Links</h2> 

            
      <ul>
        <RouterLink to="/login">Login</RouterLink>
        <RouterLink to="/hello">HelloWorld</RouterLink>
        <RouterLink to="/quiz">Quiz</RouterLink>
        <RouterLink to="/quizinput">QuizInput</RouterLink>
      </ul>
      <RouterView></RouterView>

    </div>
</div>
</template>

<style scoped>

a {
  padding: 10px;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
