import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
  strict: true,
  state: {
    showPodcastHero: false
  },
  mutations: {
    TOGGLE_PODCASTHERO: (state) => {
      state.showPodcastHero = !state.showPodcastHero
    }
  },
  actions: {

  },
  getters: {
    showPodcastHero: state => state.showPodcastHero
  }
})

global.store = store
export default store
