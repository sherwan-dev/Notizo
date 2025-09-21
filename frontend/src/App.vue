<script setup lang="ts">
import { ref } from 'vue'

const loginText = ref("Log in:")
const username = ref("")
const password = ref("")
 
async function submitLogin() {
  try {
    const response = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    })

    if (!response.ok) {
      throw new Error("Login failed")
    }

    const data = await response.json()
    console.log("Login successful:", data)
    alert("Login successful!")
  } catch (err) {
    console.error(err)
    alert("Login failed!")
  }
}
</script>

<template>
  <div>
    <p>{{ loginText }}</p>
    <input id="username" name="username" type="text" placeholder="Username" v-model="username" />
    <input id="password" name="password" type="password" placeholder="Password" v-model="password" />
    <button @click="submitLogin">Submit</button>
  </div>
</template>

<style scoped>
input {
  display: block;
  margin: 5px 0;
  padding: 5px;
}

button {
  padding: 5px 10px;
  cursor: pointer;
}
</style>
