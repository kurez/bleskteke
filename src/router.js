import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import login from './views/Login'
import register from './views/Register'
import verify from './views/Verify'
import categories from './views/Categories'
import addCategory from './views/AddCategory'
import activate from './views/ActivateUser'
import profiles from './views/Profiles'
import stores from './views/Stores'
import viewStore from './views/StoreDetails'
import cart from './views/Cart'
import logout from './views/Logout'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        requiresLogged: true
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        requiresLogged: true
      }
    },
    {
      path: '/verify',
      name: 'verify',
      component: verify,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/categories',
      name: 'categories',
      component: categories,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/add_category',
      name: 'addCategory',
      component: addCategory,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/stores',
      name: 'stores',
      component: stores,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/view_store/:slug',
      name: 'viewStore',
      component: viewStore,
      meta: {
        requiresAuth: true
      }
    },
    // {
    //   path: '/add_store',
    //   name: 'addStore',
    //   component: addStore,
    //   meta: {
    //     requiresAuth: true
    //   }
    // },
    {
      path: '/profiles',
      name: 'profiles',
      component: profiles,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/activate',
      name: 'activate',
      component: activate,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/logout',
      name: 'logout',
      component: logout,
      meta: {
        requiresAuth: true
      }
    }
  ]
})
