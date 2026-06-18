<script setup lang="ts">
import { RouterView } from 'vue-router';
import MainLayout from './layout/MainLayout.vue'
import MainNav from './layout/MainNav.vue';
</script>

<template>
  <MainLayout>
    <template #menu>
      <MainNav />
    </template>
    <template #content>
      <RouterView />
    </template>
  </MainLayout>
</template>

<style>
</style>