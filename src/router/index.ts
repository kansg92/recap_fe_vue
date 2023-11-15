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

    // 가계부
    {
      path: '/accountbook',
      name: 'accountbook',
      component: () => import('@/views/Accountbook/AccountBook.vue'),
      children: [
        {
          path : 'main',
          name : 'accountMain',
          component : () => import('@/views/Accountbook/MainView.vue')
        },
        {
          path : 'budget',
          name : 'budget',
          component : () => import('@/views/Accountbook/BudgetView.vue')
        },
        {
          path : 'books',
          name : 'accountBooks',
          component : () => import('@/views/Accountbook/BooksView.vue')
        },
        {
          path : 'callender',
          name : 'accountCallender',
          component : () => import('@/views/Accountbook/CallenderView.vue')
        },
        {
          path : 'report',
          name : 'accountReport',
          component : () => import('@/views/Accountbook/ReportView.vue')
        },
        {
          path : 'library',
          name : 'accountLibrary',
          component : () => import('@/views/Accountbook/LibraryView.vue')
        },
      ]
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
