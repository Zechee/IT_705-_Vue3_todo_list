import { createStore, storeKey } from 'vuex'

export default createStore({
  // where we define the state
  state: {
    name: "Jack"
  },
  // where we can modify the state synchronously
  mutations: {
    // we need two parameters 1: state, 2: payload (value that we want to change)
    setName(state, payload) {
      state.name = payload
    }
  },
  //where we submit the mutations asynchronously
  actions: {
    // needs two parameters 1: store, 2: params
    asyncSetName(store, params) {
      setTimeout(() => {
        store.commit('setName', params)
      }, 2000)
    }
  },
  // moudularization
  modules: {
  }
})
