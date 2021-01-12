import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogged: false,
    playerListTags: [],
    carousels: []
  },
  mutations: {
    updateLogStatus (state, status) {
      state.isLogged = status
    },
    addTag (state, tag) {
      state.playerListTags.push(tag)
    },
    clearAllTags (state) {
      state.playerListTags = []
    },
    pushCarousel (state, carousel) {
      state.carousels.push(carousel)
    },
    clearCarousels (state) {
      state.carousels = []
    }
  },
  actions: {
  },
  modules: {
  }
})
