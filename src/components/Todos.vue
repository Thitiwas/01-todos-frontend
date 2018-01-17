<template>
  <div>
    <div v-for="(todo, index) in todos" :key="todo.title">
      <b-field class="is-pulled-left">
        <b-checkbox size="is-large" @input="setStatusTodo(index)">
          <strike v-if="todo.completed">{{ todo.title }}</strike >
          <p v-else="">{{ todo.title }}</p>
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
    ...mapGetters(['todos'])
  },
  methods: {
    ...mapActions(['deleteList', 'setStatusTodo'])
  }
}
</script>
