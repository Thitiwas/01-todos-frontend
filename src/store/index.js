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
    },
    DELETETE_COMPLETED (state) {
      for (var i = state.todos.length - 1; i >= 0; i--) {
        if (state.todos[i].completed === true) {
          state.todos.splice(i, 1)
        }
      }
    },
    SAVE_LOCAL (state, val) {
      localStorage.setItem('todos', JSON.stringify(val))
    },
    GETTODOS_FROMLOCAL (state) {
      let todos = localStorage.getItem('todos')
      if (todos) {
        state.todos = JSON.parse(todos)
      }
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
    },
    deleteCompleted ({commit}) {
      commit('DELETETE_COMPLETED')
    },
    savetoLocalStorage ({commit}, val) {
      commit('SAVE_LOCAL', val)
    },
    getTodosfromLocal ({commit}) {
      commit('GETTODOS_FROMLOCAL')
    }
  },
  getters: {
    todos: state => state.todos,
    visibility: state => state.visibility
  }
})
