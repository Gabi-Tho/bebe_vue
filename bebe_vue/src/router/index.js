import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'accueil',
      component:  () => import('../views/AccueilView.vue')
    },
    {
      path: '/liste',
      name: 'liste',
      component: () => import('../views/BouteilleCellierView.vue')
    },
    {
      path: '/accueil',
      name: 'accueil',
      component: () => import('../views/AccueilView.vue')
    }
  ]
})

export default router
