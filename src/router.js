import Vue from 'vue'
import VueRouter from 'vue-router'

import { HomePage } from './pages'

Vue.use(VueRouter)

const routers = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    }
  ]
})

export default routers
