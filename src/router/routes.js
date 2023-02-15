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
          title: '桌下吧',
          login: false,
          admin: false
        }
      }, {
        path: 'registerlogin',
        name: 'registerlogin',
        component: () => import('@/pages/FrontLayout/RegisterLoginView.vue'),
        meta: {
          title: '桌下吧 | 註冊/登入',
          login: false,
          admin: false
        }
      },
      {
        path: 'shoppingMall',
        name: 'shoppingMall',
        component: () => import('@/pages/FrontLayout/ShoppingMallAllView.vue'),
        meta: {
          title: '桌下吧 | 二手專區',
          login: false,
          admin: false
        }
      }, {
        path: 'products/:id',
        name: 'product',
        component: () => import('@/pages/FrontLayout/ProductView.vue'),
        meta: {
          title: '桌下吧 | 商品',
          login: false,
          admin: false
        }
      }, {
        path: 'orders',
        name: 'orders',
        component: () => import('@/pages/FrontLayout/OrderView.vue'),
        meta: {
          title: '桌下吧 | 預約',
          login: true,
          admin: false
        }
      },
      {
        path: 'cart',
        name: 'cart',
        component: () => import('@/pages/FrontLayout/CartView.vue'),
        meta: {
          title: '桌下吧 | 購物車',
          login: true,
          admin: false
        }
      },
      {
        path: 'myshoppings',
        name: 'myshoppings',
        component: () => import('@/pages/FrontLayout/myShoppingsView.vue'),
        meta: {
          title: '桌下吧 | 我的訂單',
          login: true,
          admin: false
        }
      }, {
        path: 'myOrders',
        name: 'myOrders',
        component: () => import('@/pages/FrontLayout/myOrdersView.vue'),
        meta: {
          title: '桌下吧 | 我的訂單',
          login: true,
          admin: false
        }
      }

    ]
  },
  {
    path: '/admin',
    component: () => import('@/layouts/AdminLayout.vue'),
    children: [
      {
        path: '',
        name: 'admin-home',
        component: () => import('@/pages/AdminLayout/adminHome.vue'),
        meta: {
          title: '桌下吧 | 管理',
          login: true,
          admin: true
        }
      }, {
        path: 'users',
        name: 'admin-users',
        component: () => import('@/pages/AdminLayout/adminUsers.vue'),
        meta: {
          title: '桌下吧 | 會員管理',
          login: true,
          admin: true
        }
      }, {
        path: 'products',
        name: 'admin-products',
        component: () => import('@/pages/AdminLayout/adminProducts.vue'),
        meta: {
          title: '桌下吧 | 上架管理',
          login: true,
          admin: true
        }
      },
      {
        path: 'products_list',
        name: 'admin-products-list',
        component: () => import('@/pages/AdminLayout/adminProductsList.vue'),
        meta: {
          title: '桌下吧 | 上架管理 | 桌遊清單',
          login: true,
          admin: true
        }
      },
      {
        path: 'products_shoppingMall',
        name: 'admin-products-shoppingMall',
        component: () => import('@/pages/AdminLayout/adminProductsShoppingMall.vue'),
        meta: {
          title: '桌下吧 | 上架管理 | 二手專區',
          login: true,
          admin: true
        }
      },
      {
        path: 'orders',
        name: 'admin-orders',
        component: () => import('@/pages/AdminLayout/adminOrders.vue'),
        meta: {
          title: '桌下吧 | 預約管理',
          login: true,
          admin: true
        }
      }, {
        path: 'events',
        name: 'admin-events',
        component: () => import('@/pages/AdminLayout/adminEvents.vue'),
        meta: {
          title: '桌下吧 | 活動管理',
          login: true,
          admin: true
        }
      }, {
        path: 'shoppings',
        name: 'admin-shoppings',
        component: () => import('@/pages/AdminLayout/adminShoppings.vue'),
        meta: {
          title: '桌下吧 | 訂單管理',
          login: true,
          admin: true
        }
      }, {
        path: 'news',
        name: 'admin-news',
        component: () => import('@/pages/AdminLayout/adminNews.vue'),
        meta: {
          title: '桌下吧 | 公告管理',
          login: true,
          admin: true
        }
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: ErrorNotFound,
    meta: {
      title: '桌下吧 | 404'
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
