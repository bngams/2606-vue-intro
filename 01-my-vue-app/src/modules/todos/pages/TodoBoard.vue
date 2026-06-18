<script setup>
import { ref, computed } from 'vue'
import TodoForm from '../components/TodoForm.vue'
import TodoList from '../components/TodoList.vue'

let id = 0
const todos = ref([
  { id: id++, todo: 'Learn HTML', completed: true },
  { id: id++, todo: 'Learn JavaScript', completed: true },
  { id: id++, todo: 'Learn Vue', completed: false }
])

function addTodo(value) {
  todos.value.push({ id: id++, todo: value, completed: false })
}
function removeTodo(todoId) {
  todos.value = todos.value.filter((t) => t.id !== todoId)
}

</script>

<template>
  <TodoForm @submitTodo="addTodo" />
  <!-- le template unwrap déjà le .value => le props recoit la .value -->
  <TodoList :todos="todos" @removeTodo="removeTodo" />
</template>

