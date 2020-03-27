import Vuex from 'vuex'

const store = new Vuex.Store({
  state: {
    username: null,
    count: 1
  },
  mutations: {
    // we can use the ES2015 computed property name feature
    // to use a constant as the function name
    increment (state) {
      // mutate state

    }
  }
})

export default store