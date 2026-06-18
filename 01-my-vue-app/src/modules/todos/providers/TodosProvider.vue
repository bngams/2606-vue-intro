<!-- inside provider component -->
<script setup lang="ts">
import { provide, ref } from 'vue'

const todos = ref([])

function loadTodos(reload = false) {
  // logic to load todos
  if(reload || todos.value.length === 0) {
    fetch('https://dummyjson.com/todos?limit=5')
      .then((response) => response.json())
      .then((data) => {
        todos.value = data.todos
      })
      .catch((err) => {
        alert('Failed to load todos');
        console.error('Failed to load todos', err)
      })
  }
}

provide('todos', {
  todos,
  loadTodos
})
</script>

<template>
  <slot></slot>
</template>