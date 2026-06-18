<script setup>
import { ref, computed, onMounted } from 'vue'
import TodoForm from '../components/TodoForm.vue'
import TodoList from '../components/TodoList.vue'

let id = 0
const todos = ref([])
const loading = ref(true)
const error = ref('')

function loadTodos() {
  if(error.value) error.value = ''; // reset error before fetching
  fetch('https://dummyjson.com/todos?limit=5') // we can use a separate file for API calls  (a service)
    .then((response) => response.json())
    .then((data) => {
      todos.value = data.todos; // .map(...) if you want to transform the data
    })
    .catch((err) => {
      error.value = 'Failed to load todos'; // handle the error appropriately
    })
    .finally(() => {
      loading.value = false
    })
}

onMounted(() => {
  setTimeout(() => {
    loadTodos()
  }, 3000) // simulate a delay for loading
})

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

