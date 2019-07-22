import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex"

Vue.use(Vuex);

let store = new Vuex.Store({
  state: {
    name: "",
    count: 0
  },
  mutations: {},
  actions: {},
  getters: {}
})

new Vue({
  el: '#app',
  store,
  render: h => h(App),
  computed: {
    count: () => {
      return this.$store.state.count;
    }
  },
});