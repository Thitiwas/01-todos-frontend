<template>
  <div>
    <div v-for="(todo, index) in filters" :key="todo.title">
      <b-field class="is-pulled-left">
        <b-checkbox size="is-large" @input="setStatusTodo(index)">
          <strike v-if="todo.completed">{{ todo.title }}</strike>
          <p v-else="todo.completed">{{ todo.title }}</p>
        </b-checkbox>
      </b-field>
      <a class="delete is-pulled-right" @click="deleteList(index)"></a>
      <div class="is-clearfix"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['todos', 'visibility']),
    filters () {
      if (this.visibility === 'all') {
        return this.todos
      } else if (this.visibility === 'active') {
        return this.todos.filter(todo => todo.completed === false)
      } else if (this.visibility === 'completed') {
        return this.todos.filter(todo => todo.completed === true)
      }
    }
  },
  methods: {
    ...mapActions(['deleteList', 'setStatusTodo'])
  },
  watch: {
    todos: function () {
      this.queryTodoFromVisibility()
    }
  }
}
</script>
