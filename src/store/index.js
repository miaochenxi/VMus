import { createStore } from 'vuex'

export default createStore({
  state: {
    isLogged: false
  },
  mutations: {
    updateLogStatus (state, status) {
      state.isLogged = status
    }
  },
  actions: {
  },
  modules: {
  }
})
