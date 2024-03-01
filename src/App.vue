<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import {computed} from "vue";

const modeServer: any = computed(() => import.meta.env.VITE_APP_MODE)
</script>

<template>
    <div>{{ modeServer }}</div>
    <HelloWorld msg="Vite + Vue"/>
</template>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
