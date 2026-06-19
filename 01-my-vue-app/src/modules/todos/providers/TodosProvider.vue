<!-- inside provider component -->
<script setup lang="ts">
import { provide, ref } from 'vue'
import type { Todo } from '../models/todo'

const todos = ref<Todo[]>([])
const loading = ref(false)
const error = ref('')
let nextId = 0

function loadTodos(reload = false) {
  if(reload || todos.value.length === 0) {
    loading.value = true
    error.value = ''

    fetch('https://dummyjson.com/todos?limit=5')
      .then((response) => response.json())
      .then((data) => {
        todos.value = data.todos
        // Set nextId based on highest existing id
        if (data.todos.length > 0) {
          nextId = Math.max(...data.todos.map((t: any) => t.id)) + 1
        }
      })
      .catch((err) => {
        error.value = 'Failed to load todos'
        console.error('Failed to load todos', err)
      })
      .finally(() => {
        loading.value = false
      })
  }
}

function addTodo(value: string) {
  todos.value.push({
    id: nextId++,
    todo: value,
    completed: false
  })
}

function removeTodo(todoId: number) {
  todos.value = todos.value.filter((t: any) => t.id !== todoId)
}

function toggleTodo(todoId: number) {
  const todo = todos.value.find((t: any) => t.id === todoId)
  if (todo) {
    todo.completed = !todo.completed
  }
}

provide('todos', {
  todos,
  loading,
  error,
  loadTodos,
  addTodo,
  removeTodo,
  toggleTodo
})
</script>

<template>
  <slot></slot>
</template>