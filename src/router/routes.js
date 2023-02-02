import MainLayout from '../layouts/MainLayout.vue'
import IndexPage from '../pages/FrontLayout/IndexPage.vue'
import ErrorNotFound from '../pages/ErrorNotFound.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: IndexPage,
        meta: {
          title: '桌遊網'
        }
      }, {
        path: 'registerlogin',
        name: 'registerlogin',
        component: () => import('@/pages/FrontLayout/RegisterLoginView.vue'),
        meta: {
          title: '桌遊網 | 註冊/登入'
        }
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: ErrorNotFound,
    meta: {
      title: '桌遊網 | 404'
    }
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    name: 'all',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
