import { createWebHistory, createRouter } from 'vue-router'

import Login from '../components/LogIn.vue'
import HelloWorld from '../components/HelloWorld.vue'


const routes = [
  { path: '/login', component: Login },
  { path: '/hello', component: HelloWorld },
  
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router