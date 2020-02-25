import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Help from '../views/Help'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  }
]

const router = new VueRouter({
  routes
})

export default router
