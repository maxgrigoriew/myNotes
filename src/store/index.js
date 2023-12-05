import Vue from 'vue'
import Vuex from 'vuex'
import { httpClient } from '@/services'
import AuthServices from '@/servises/AuthServises'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: null,
    isAuth: false,
    isOpenModal: false,
    isLoginModal: true,
  },
  getters: {
  },
  mutations: {
    changeOpenModal(state) {
      state.isOpenModal = !state.isOpenModal
    },
    changeStatusModal(state) {
      state.isLoginModal = !state.isLoginModal
    },
    setToken(state, token) {
      state.token = token
    },
    setIsAuth(state, isAuth) {
      state.isAuth = isAuth
    },
  },
  actions: {
    async ping({ state, commit }) {
      try {
        const response = await AuthServices.ping()
      } catch (e) {
        console.log(e)
      }
    },

    async auth({ state, commit }, { email, password }) {
      try {
        const response = await AuthServices.auth(email, password)

        localStorage.setItem('token', response.data.accessToken)
        commit('setIsAuth', true)
        commit('setToken', response.data.accessToken)
      } catch (e) {
        console.log(email, password)

        console.log(e)

      }
    }
  },
  modules: {
  }
})
