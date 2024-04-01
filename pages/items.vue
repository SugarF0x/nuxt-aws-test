<script setup lang="ts">
const { data, execute, pending } = await useAsyncData(async () => {
  const { response } = await useNuxtApp().$Amplify.REST.getItems()
  const data = await response
  return data.body.json()
})
</script>

<template>
  <pre>pending: {{ pending.toString() }}</pre>
  <pre>{{ JSON.stringify(data, null, 2) }}</pre>
  <button @click="execute()">retry</button>
</template>

<style scoped>

</style>
