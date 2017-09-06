import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    settings: {
      news: false,
      chosedContent: false
    }
  },
  getters: {},
  actions: {},
  mutations: {
    TOGGLE_SETTINGS_NEWS (state) {
      state.settings.news = !state.settings.news
    },
    TOGGLE_SETTINGS_CHOSEDCONTENT (state) {
      state.settings.chosedContent = !state.settings.chosedContent
    }
  }
})

export default store
