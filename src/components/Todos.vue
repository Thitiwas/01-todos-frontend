<template>
  <div id="test">
    <div v-for="(todo, index) in todos" :key="todo.title" v-if="visibility === 'all'">
      <div class="">
        <b-field class="is-pulled-left handle">
          <b-checkbox size="is-large" @input="setStatusTodo(index)">
            <strike v-if="todo.completed">{{ todo.title }}</strike>
            <p v-else="todo.completed">{{ todo.title }}</p>
          </b-checkbox>
        </b-field>
        <a class="delete is-pulled-right" @click="deleteList(index)"></a>
        <div class="is-clearfix"></div>
      </div>
    </div>
    <div v-for="(todo, index) in todos" :key="todo.title" v-if="visibility === 'active'">
      <div class="" v-if="todo.completed === false">
        <b-field class="is-pulled-left handle">
          <b-checkbox size="is-large" @input="setStatusTodo(index)">
            <strike v-if="todo.completed">{{ todo.title }}</strike>
            <p v-else="todo.completed">{{ todo.title }}</p>
          </b-checkbox>
        </b-field>
        <a class="delete is-pulled-right" @click="deleteList(index)"></a>
        <div class="is-clearfix"></div>
      </div>
    </div>
    <div v-for="(todo, index) in todos" :key="todo.title" v-if="visibility === 'completed'">
      <div class="" v-if="todo.completed === true">
        <b-field class="is-pulled-left handle">
          <b-checkbox size="is-large" @input="setStatusTodo(index)">
            <strike v-if="todo.completed">{{ todo.title }}</strike>
            <p v-else="todo.completed">{{ todo.title }}</p>
          </b-checkbox>
        </b-field>
        <a class="delete is-pulled-right" @click="deleteList(index)"></a>
        <div class="is-clearfix"></div>
      </div>
    </div>
    <button class="button is-danger is-medium" @click="deleteCompleted()">Delete completed</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Sortable from 'sortablejs'

export default {
  computed: {
    ...mapGetters(['todos', 'visibility'])
  },
  methods: {
    ...mapActions(['deleteList', 'setStatusTodo', 'deleteCompleted', 'savetoLocalStorage', 'sortTo']),
    onUpdate: function (event) {
      this.sortTo({ newIndex: event.newIndex, oldIndex: event.oldIndex })
    }
  },
  watch: {
    todos: {
      handler (val) {
        this.savetoLocalStorage(val)
      },
      deep: true
    }
  },
  mounted () {
    let el = document.getElementById('test')
    Sortable.create(el, { handle: '.handle', onUpdate: this.onUpdate, animation: 150 })
  }
}
</script>
