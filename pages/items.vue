<script setup lang="ts">
import { useAsyncData } from "#app"

const path = ref('/api/items')

const { data, execute, pending } = await useAsyncData(() => $fetch(path.value))
</script>

<template>
  <input type="text" v-model="path" @keydown.enter="execute()">
  <pre>pending: {{ pending.toString() }}</pre>
  <pre>{{ JSON.stringify(data, null, 2) }}</pre>
  <button @click="execute()">retry</button>
</template>

<style scoped>

</style>
