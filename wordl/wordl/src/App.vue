<script setup>
import HelloWorld from './components/Wordl.vue'
</script>

<template>
      <HelloWorld msg="Vite + Vue" />
</template>




<style scoped>
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

.dropdown {
        position: relative;
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        
        z-index: 1;
        border: none;
    }

    .dropdown:hover .dropdown-content {
        display: block;
        
    }

    .dropbtn {
        background-color: grey;
        color: blue;
        border: 2px solid black;
        font-size: 16px;
        padding: 16px;
    }

    .black {
        background-color: black;
        color:blue;
    }

    .white {
        background-color: white;
        color: blue;
    }
</style>
