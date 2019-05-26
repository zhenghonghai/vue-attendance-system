import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    auth: {
      id: '',
      username: '',
      password: ''
    }
  },
  getters: {
    getAuth: (state) => {
      return state.auth
    }
  },
  mutations: {
    saveAuth: (state, payload) => {
      state.auth.id = payload.id
      state.auth.username = payload.username
      state.auth.password = payload.password
    }
  },
  actions: {
    saveAuth: (context, payload) => {
      context.commit("saveAuth", payload)
    }
  }

})
