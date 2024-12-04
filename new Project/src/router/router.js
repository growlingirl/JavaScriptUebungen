import { createWebHistory, createRouter } from 'vue-router'

import Login from '../components/LogIn.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Quiz from '../components/Quiz.vue'
import QuizInput from '../components/QuizInput.vue'


const routes = [
  { path: '/login', component: Login },
  { path: '/hello', component: HelloWorld },
  { path: '/quiz', component: Quiz },
  { path: '/quizinput', component: QuizInput }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router