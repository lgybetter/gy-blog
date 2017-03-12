import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/views/auth'
import home from '@/views/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/auth',
      name: 'auth',
      component: auth
    }
  ]
})
