<script setup lang="ts">
import { RouterView } from 'vue-router';
import MainLayout from './layout/MainLayout.vue'
import MainNav from './layout/MainNav.vue';
import TodosProvider from './modules/todos/providers/TodosProvider.vue';
</script>

<template>
  <TodosProvider>
    <MainLayout>
      <template #menu>
        <MainNav />
      </template>
      <template #content>
        <RouterView />
      </template>
    </MainLayout>
  </TodosProvider>
</template>

<style>
</style>