import { createRouter, createWebHistory } from 'vue-router'
import clientsRouter from '@/modules/clients/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import(/* webpackChunkName: 'layout' */ '@/layout/AppLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: () =>
            import(/* webpackChunkName: 'home' */ '@/modules/home/views/HomeView.vue')
        },
        {
          path: '/clientes',
          ...clientsRouter
        }
      ]
    }
  ]
})

export default router
