<script setup lang="ts">
const path = ref('/api/items')

const { data, execute, pending } = await useFetch(path.value)
</script>

<template>
  <input type="text" v-model="path">
  <pre>pending: {{ pending.toString() }}</pre>
  <pre>{{ JSON.stringify(data, null, 2) }}</pre>
  <button @click="execute()">retry</button>
</template>

<style scoped>

</style>
