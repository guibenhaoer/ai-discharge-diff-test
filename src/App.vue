<script setup lang="ts">
</script>

<template>
  <div>
    <h2>Welcome to the Enhanced Page</h2>
    <p>This is a beautifully styled page with a header and footer.</p>
    <p>Explore the content and enjoy the experience!</p>
  </div>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <router-view />
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
h2 {
  color: #6200ea;
  text-align: center;
}
p {
  font-size: 1.2rem;
  text-align: center;
  margin: 1rem 0;
}
</style>
