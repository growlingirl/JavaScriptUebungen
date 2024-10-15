import { createWebHistory, createRouter } from 'vue-router'

import Login from '../components/LogIn.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Quiz from '../components/Quiz.vue'


const routes = [
  { path: '/login', component: Login },
  { path: '/hello', component: HelloWorld },
  { path: '/quiz', component: Quiz };
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router