<script setup>
import{ ref, computed, onMounted} from 'vue';

import Button from './Button.vue';


const emit = defineEmits(['navigation'])

let links = [
    {Name : "Login" , link : '#'},
    {Name : "HelloWorld" , link : '#'},
    {Name : "Quiz" , link : '#'},
]
</script>
<template>
   <div class="bg-gray-900 text-gray-100 py-3.5 px-6 shadow md:flex  items-center fixed  ">
    <div class="flex items-center">
        <span class="text-green-500 text-xl mr-1">
            <!-- <i class=""></i> -->
        </span>

        <h1 class="text-xl">@</h1>
    </div>
        <ul class="md:flex md:items-center">
            <li class="md:mx-4 md:my-0 my-6" v-for="link in links">
                <a href="link.link" class="text-xl 
                    hover:text-green-500">{{link.Name}}</a>
            </li>

            <Button>Get started</Button>

        </ul>

   </div> 
</template>
