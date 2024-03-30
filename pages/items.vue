<script setup lang="ts">
const { data } = await useFetch('/dynamo/items')
</script>

<template>
  <pre>{{ JSON.stringify(data, null, 2) }}</pre>
</template>

<style scoped>

</style>
