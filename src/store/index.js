import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogged: false,
    playerListTags: []
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
    }
  },
  actions: {
  },
  modules: {
  }
})
