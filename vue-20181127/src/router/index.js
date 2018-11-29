import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Study from '@/components/Study'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import User from '@/components/User'
import Register from '@/components/Register'
import Aside from '@/components/Aside'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/study',
      name: 'Study',
      component: Study
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/footer',
      name: 'Footer',
      component: Footer
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/aside',
      name: 'Aside',
      component: Aside
    }
  ]
})
