<script setup lang="ts">

// TS syntax for defining props
const props = defineProps<{
  name: string
}>()

</script>

<template>
    <h1>Hello, {{ name || 'World' }}!</h1>
</template>

<style>
</style>