import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    info: {
      username: '郑宏海',
      password: '1234'
    }
  },
  getters: {
    getInfo: (state) => {
      return state.info
    }
  },
  mutations: {
    saveInfo: (state) => {
      state.info.username = '高永彤'
      state.info.password = '4321'
      // return state.info
    }
  }
})
