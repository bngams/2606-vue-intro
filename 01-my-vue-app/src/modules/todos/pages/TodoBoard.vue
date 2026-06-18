<script setup>
import { ref, computed, onMounted, inject } from 'vue'
import TodoForm from '../components/TodoForm.vue'
import TodoList from '../components/TodoList.vue'

let id = 0
const { todos, loadTodos } = inject('todos')
const loading = ref(false); // TODO: implement loading state
const error = ref(''); // TODO: implement error state

onMounted(() => {
  setTimeout(() => {
    loadTodos()
  }, 3000) // simulate a delay for loading
})

// TODO: set in provider
function addTodo(value) {
  todos.value.push({ id: id++, todo: value, completed: false })
}
function removeTodo(todoId) {
  todos.value = todos.value.filter((t) => t.id !== todoId)
}

</script>

<template>
  <template v-if="loading">
    <v-skeleton-loader type="card"></v-skeleton-loader>
    <v-skeleton-loader type="list-item"></v-skeleton-loader>
    <v-skeleton-loader type="list-item"></v-skeleton-loader>
    <v-skeleton-loader type="list-item"></v-skeleton-loader>
  </template>
  <template v-else-if="error && error.length > 0">{{ error }}</template>
  <template v-else>
    <TodoForm @submitTodo="addTodo" />
    <!-- le template unwrap déjà le .value => le props recoit la .value -->
    <TodoList :todos="todos" @removeTodo="removeTodo" />
  </template>
</template>

