<script setup lang="ts">
  import { ref } from 'vue'

  const theme = ref('light')

  function onClick () {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }
</script>

<template>
  <v-responsive class="border rounded">
    <v-app :theme="theme">
      <v-app-bar class="px-3">
        <v-app-bar-title>My Vue App</v-app-bar-title>
        <v-spacer></v-spacer>
        <slot name="menu"></slot>
        <v-spacer></v-spacer>
        <v-btn
          :prepend-icon="theme === 'light' ? 'mdi-weather-sunny' : 'mdi-weather-night'"
          text="Toggle Theme"
          slim
          @click="onClick"
        ></v-btn>
      </v-app-bar>

      <v-main>
        <v-container>
          <!-- generate a breadcrumb here from navItems / vue router-->
          <slot name="content"></slot>
        </v-container>
      </v-main>
    </v-app>
  </v-responsive>
</template>

<style>
</style>