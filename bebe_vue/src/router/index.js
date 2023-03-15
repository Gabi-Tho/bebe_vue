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
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/auth/LoginView.vue')
    },
    {
      path: '/creer-compte',
      name: 'creer-compte',
      component: () => import('../views/auth/CreateView.vue')
    },
    {
      path: '/creer-cellier',
      name: 'creer-cellier',
      component: () => import('../views/cellier/CreateCellierView.vue')
    }
  ]
})

export default router
