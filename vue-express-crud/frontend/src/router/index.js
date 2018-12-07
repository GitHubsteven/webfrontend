import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import ListTodo from '../components/ListTodo'
import CreateTodo from '../components/CreateTodo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/todos',
      name: 'ListTodo',
      component: ListTodo
    },
    {
      path: '/create',
      name: 'CreateTodo',
      component: CreateTodo
    }
  ]
})
