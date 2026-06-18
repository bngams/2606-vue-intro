<script setup>

import { ref, computed } from 'vue'

const props = defineProps({
  todos: Array
})

const emits = defineEmits(['removeTodo'])


const hideCompleted = ref(false)

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? props.todos.filter((t) => !t.completed)
    : props.todos
})

function removeTodo(todoId) {
  emits('removeTodo', todoId)
}

</script>

<template>
  <v-list>
    <v-list-subheader>Todos</v-list-subheader>
      <v-list-item
        v-for="todo in filteredTodos"
        :key="todo.id"
        :title="todo.todo"
        :value="todo.id"
      >
        <template #prepend>
          <v-checkbox-btn v-model="todo.completed" @click.stop></v-checkbox-btn>
        </template>
        <template #title>
          <span :class="{ done: todo.completed }">{{ todo.todo }}</span>
        </template>
        <template #append>
          <v-btn icon @click="removeTodo(todo.id)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-list-item>
  </v-list>
  <v-divider></v-divider>
  <br/>
  <v-btn size="x-large" @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? 'Show all' : 'Hide completed' }}
  </v-btn>
</template>
