<script setup>
import { ref, computed, onMounted, inject } from 'vue'
import TodoForm from '../components/TodoForm.vue'
import TodoList from '../components/TodoList.vue'

let id = 0
const { todos, loadTodos } = inject('todos')
const loading = ref(false); // TODO: implement loading state
const error = ref(''); // TODO: implement error state

const unCompletedTodosCount = computed(() => {
  return todos.value.filter((t) => !t.completed).length
})

onMounted(() => {
  setTimeout(() => {
    loadTodos()
  }, 3000) // simulate a delay for loading
})

</script>

<template>
   <v-badge location="top right" color="success" :content="unCompletedTodosCount">
    <v-icon icon="mdi-calendar"></v-icon>
   </v-badge>
</template>

