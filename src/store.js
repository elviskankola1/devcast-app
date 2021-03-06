import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  strict: true,
  state: {},
  mutations: {},
  actions: {},
  getters: {}
})

global.store = store
export default store
