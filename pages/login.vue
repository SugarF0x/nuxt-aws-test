<script setup lang="ts">
import { Authenticator } from "@aws-amplify/ui-vue"
</script>

<template>
  <authenticator>
    <template v-slot="{ user, signOut }">
      <h1>Hello {{ user.username }}</h1>
      <button @click="signOut()" >cum balls</button>
    </template>
  </authenticator>
</template>

<style src="@aws-amplify/ui-vue/styles.css" />
