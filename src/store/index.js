import Vue from 'vue'
import Vuex from 'vuex'
import { httpClient } from '@/services'
import AuthServices from '@/servises/AuthServises'
import router from './../router/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isAuth: false,
    isOpenModal: false,
    isLoginModal: true,
    errors: []
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
    setIsAuth(state, isAuth) {
      state.isAuth = isAuth
    },
    setErrors(state, errors) {
      state.errors = errors
    },
  },
  actions: {
    async auth({ state, commit }, { email, password }) {
      try {
        const response = await AuthServices.auth(email, password)
        localStorage.setItem('token', response.data.accessToken)
        commit('setIsAuth', true)
        router.push('admin')
      } catch (e) {
        commit('setErrors', e.response.data.message)
      }
    },
    async logout({ state, commit }) {
      localStorage.setItem('token', null)
      commit('setIsAuth', false)
      commit('setToken', null)
      router.push('/')

    }
  },

})
