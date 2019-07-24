import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    name: '',
    count: 1
  },
  //不支持异步处理，可以在外部直接通过store.commit("methdoType",optionParamObj)的方式来调用
  mutations: {
    increment (state) {
      state.count++
    }
  },
  //调用mutation的方式来更新state的状态，但是支持异步
  actions: {},
  getters: {}
})

new Vue({
    el: '#app',
    store,
    render: h => h(App)
  }
)