import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    todos: [],
    visibility: 'all'
  },
  mutations: {
    ADD_TODO (state, title) {
      state.todos.push({
        title,
        completed: false
      })
    },
    CHANGE_VISIBILITY (state, newVisibilityValue) {
      state.visibility = newVisibilityValue
    },
    DELETE_LIST (state, indexOfList) {
      state.todos.splice(indexOfList, 1)
    },
    SETSTATUS_TODO (state, indexOfList) {
      state.todos[indexOfList].completed = !state.todos[indexOfList].completed
    }
  },
  actions: {
    addTodo ({commit}, title) {
      commit('ADD_TODO', title)
    },
    changeVisibility ({commit}, newVisibilityValue) {
      commit('CHANGE_VISIBILITY', newVisibilityValue)
    },
    deleteList ({commit}, indexOfList) {
      commit('DELETE_LIST', indexOfList)
    },
    setStatusTodo ({commit}, indexOfList) {
      commit('SETSTATUS_TODO', indexOfList)
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})
