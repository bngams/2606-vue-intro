<script setup>
import { onMounted, inject } from 'vue'
import TodoForm from '../components/TodoForm.vue'
import TodoList from '../components/TodoList.vue'

const { todos, loading, error, loadTodos, addTodo, removeTodo } = inject('todos')

onMounted(() => {
  setTimeout(() => {
    loadTodos()
  }, 3000) // simulate a delay for loading
})

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

