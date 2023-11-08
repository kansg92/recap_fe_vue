import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'

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
      component: () => import('@/views/about/AboutView.vue')
    },
    {
      path: '/dailyreport',
      name: 'dailyreport',
      component: () => import('@/views/daily_report/DailyReportView.vue')
    },
    {
      path: '/accountbook',
      name: 'accountbook',
      component: () => import('@/views/accountBook/AccountBook.vue')
    },

//  ******************************* ErroPage *****************************************
    {
      path: '/404',
      name : "notFound",
      component: () => import('@/views/error/NotFound.vue')
    },

    {
        path: '/:pathMatch(.*)*',
        redirect: "/404"
    },
  ]
})

export default router
