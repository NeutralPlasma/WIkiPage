import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/simplecrops',
      name: 'simplecrops',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/holoextension',
      name: 'holoextension',
      component: () => import('../views/HoloExtension.vue')
    },
    {
      path: '/simplepvp',
      name: 'simplepvp',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/lootboxes',
      name: 'lootboxes',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
