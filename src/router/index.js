import Vue from 'vue'
import VueRouter from 'vue-router'
import IsHome from '../views/IsHome.vue'
import IsAdmin from '../views/IsAdmin.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: IsHome
  },
  {
    path: '/admin',
    name: 'admin',
    component: IsAdmin
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
