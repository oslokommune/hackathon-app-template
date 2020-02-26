import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Help from '../views/Help'
import Inspiration from '../views/Inspiration'
import Awards from '../views/Awards'
import Resources from '../views/Resources'

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
  },
  {
    path: '/inspiration',
    name: 'Inspiration',
    component: Inspiration
  },
  {
    path: '/awards',
    name: 'Awards',
    component: Awards
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources
  }
]

const router = new VueRouter({
  routes
})

export default router
