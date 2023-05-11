import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'default',
    component: () => import('../views/Default.vue')
  },
  {
    path: '/backend',
    name: 'backend',
    component: () => import('../views/Backend.vue')
  },
  {
    path: '/front',
    name: 'front',
    component: () => import('../views/Front.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
