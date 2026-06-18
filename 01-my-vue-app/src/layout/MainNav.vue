<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { navItems } from '../router';  

const menuItems = navItems.filter(item => item.meta?.mainMenu);

</script>

<template>
    <ul>
        <li v-for="item in menuItems" :key="item.path">
            <RouterLink :to="item.path">{{ item.name }}</RouterLink>
        </li>
    </ul>
</template>

<style>
    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 1rem;
    }
</style>