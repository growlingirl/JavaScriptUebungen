import { createMemoryHistory, createRouter } from 'vue-router'

import Login from '../components/LogIn.vue'
import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  { path: '/', component: Login },
  { path: '/hello', component: HelloWorld },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router