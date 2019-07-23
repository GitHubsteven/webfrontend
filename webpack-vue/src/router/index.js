import Vue from 'vue'
import Router from 'vue-router'
import ReflectComponent from "../components/ReflectComponent.vue"
import HelloComponent from "../components/HelloComponent.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/reflect',
      name: 'ReflectComponent',
      component: ReflectComponent
    },
    {
      path: '/hello',
      name: 'HelloComponent',
      component: HelloComponent
    },
  ]
})