<script setup lang="ts">
import { ref } from 'vue'

const loginText = ref("Log in:")

</script>

<template>
  <div>
    <p>{{ loginText }}</p>
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <button value="Submit">Submit</button>
  </div>
</template>

<style scoped>
input {
  display: block;
  margin: 5px 0;
  padding: 5px;
}
</style>
