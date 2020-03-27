import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    count: 1,
    username: '',
    isLogin: false
  },
  //不支持异步处理，可以在外部直接通过store.commit("methdoType",optionParamObj)的方式来调用
  mutations: {
    increment (state, payload) {
      state.count = state.count + payload.inc
    },
    login (state, userInfo) {
      state.username = userInfo.username
    },
    //mutations
    ADD_LOGIN_USER (state, data) {  //登入，保存状态
      sessionStorage.setItem('username', data)  //添加到sessionStorage
      sessionStorage.setItem('isLogin', true)
      state.username = data             //同步的改变store中的状态
      state.isLogin = true
    },
    SIGN_OUT (state) {   //退出，删除状态
      sessionStorage.removeItem('username')  //移除sessionStorage
      sessionStorage.removeItem('isLogin')
      state.username = ''                //同步的改变story中的状态
      state.isLogin = false
    }
  },
  //调用mutation的方式来更新state的状态，但是支持异步
  actions: {},
  getters: {
    //getters
    isLogin (state) {
      if (!state.isLogin) {
        state.isLogin = sessionStorage.getItem('isLogin')   //从sessionStorage中读取状态
        state.username = sessionStorage.getItem('username')
      }
      return state.isLogin
    },
    username (state) {
      if (!state.isLogin) {
        state.isLogin = sessionStorage.getItem('isLogin')   //从sessionStorage中读取状态
        state.username = sessionStorage.getItem('username')
      }
      return state.username
    }
  }
})

new Vue({
    el: '#app',
    store,
    render: h => h(App)
  }
)