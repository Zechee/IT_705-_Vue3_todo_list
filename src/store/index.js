import { createStore} from 'vuex'

export default createStore({
  // where we define the state
  state: {
    list: [
      {
          title: 'Eating',
          complete: false
      },
      {
          title: 'Sleeping',
          complete: false
      },
      {
          title: 'Coding',
          complete: true
      }
  ]
  },
  // where we can modify the state synchronously
  mutations: {
    // we need two parameters 1: state, 2: payload (value that we want to change)
    // adding todo list
    addTodo(state, payload) {
      state.list.push(payload)
    },
    // delete the task splice(subscript, number)
    delTodo(state, payload) {
      state.list.splice(payload, 1)
    },
    // celear completed task
    clear(state, payload) {
      state.list = payload
    }

  },
  //where we submit the mutations asynchronously
  actions: {
    // needs two parameters 1: store, 2: params
  },
  // moudularization
  modules: {
  }
})
