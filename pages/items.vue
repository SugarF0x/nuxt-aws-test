<script setup lang="ts">
const { data, execute, pending } = await useFetch('/dynamo/items')
</script>

<template>
  <pre>pending: {{ pending.toString() }}</pre>
  <pre>{{ JSON.stringify(data, null, 2) }}</pre>
  <button @click="execute()">retry</button>
</template>

<style scoped>

</style>
