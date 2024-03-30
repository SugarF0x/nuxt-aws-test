<script setup lang="ts">
import { get } from 'aws-amplify/api'
import awsExports from "~/aws-exports"

const path = ref('/cocks')

const { data, execute, pending } = await useLazyAsyncData(async () => {
  const response = await get({
    apiName: awsExports.aws_cloud_logic_custom[0].name,
    path: path.value
  }).response

  return response.body.json()
}, { immediate: false })
</script>

<template>
  <input type="text" v-model="path" @keydown.enter="execute()">
  <pre>pending: {{ pending.toString() }}</pre>
  <pre>{{ JSON.stringify(data, null, 2) }}</pre>
  <button @click="execute()">retry</button>
</template>

<style scoped>

</style>
