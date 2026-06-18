<script setup>
import { ref, reactive, defineEmits } from 'vue'

const emits = defineEmits(['submitTodo'])

const newTodo = ref('')
const errors = ref([])

function addTodo() {
  // if not empty ...
  if(newTodo.value.trim().length > 3) {
  emits('submitTodo', newTodo.value)
  newTodo.value = ''
  } else {
    // else display error
    errors.value.push('Missing values')
  }
}

</script>

<template>
  <ul v-if="errors.length > 0">
    ...
  </ul>
  <v-form @submit.prevent="addTodo">
    <v-row>
        <v-text-field v-model="newTodo" variant="solo-filled" required placeholder="your todo..." minlength="3"></v-text-field>
        <v-btn type="submit" size="x-large">
            Add Todo
        </v-btn>
    </v-row>
  </v-form>
</template>
