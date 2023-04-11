import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthorized: false,
  },
  getters: {
    isAuthorized: state => {
      return state.isAuthorized
    }
  },
  mutations: {
    IsAuthorizedToTrue(state) {
      state.isAuthorized = true
    },
    IsAuthorizedToFalse(state) {
      state.isAuthorized = false
    }
  },
  actions: {
  },
  modules: {
  }
})
